import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    text: '',
    error: undefined,
    loading: false,
};
var addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState: initialState,
    reducers: {
        setComment: function (state, action) {
            state.text = action.payload;
        },
    },
});
export var addCommentActions = addCommentSlice.actions;
export var addCommentReducer = addCommentSlice.reducer;
