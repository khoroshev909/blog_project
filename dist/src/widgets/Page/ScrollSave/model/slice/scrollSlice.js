import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    position: {},
};
var scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.position[payload.pageUrl] = payload.scrollTop;
        },
    },
});
export var scrollActions = scrollSlice.actions;
export var scrollReducer = scrollSlice.reducer;
