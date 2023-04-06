import { createSlice } from '@reduxjs/toolkit';
import { USER_AUTH_DATA_KEY } from 'shared/config/const';
var initialState = {
    authData: undefined,
    mounted: false,
};
var userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setAuthData: function (state, action) {
            state.authData = action.payload;
        },
        initAuthData: function (state) {
            var user = localStorage.getItem(USER_AUTH_DATA_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state.mounted = true;
        },
        logout: function (state) {
            state.authData = undefined;
            localStorage.removeItem(USER_AUTH_DATA_KEY);
        },
    },
});
export var userReducer = userSlice.reducer;
export var userActions = userSlice.actions;
