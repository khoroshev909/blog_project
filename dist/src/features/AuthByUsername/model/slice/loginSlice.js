import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../../services/loginByUsername/loginByUsername';
var initialState = {
    username: '',
    password: '',
    error: undefined,
    loading: false,
};
var loginSlice = createSlice({
    name: 'loginForm',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(loginByUsername.fulfilled, function (state, action) {
            state.username = action.payload.username;
            state.error = undefined;
            state.loading = false;
        })
            .addCase(loginByUsername.pending, function (state) {
            state.error = undefined;
            state.loading = true;
        })
            .addCase(loginByUsername.rejected, function (state, action) {
            state.error = action.payload;
            state.loading = false;
        });
    },
});
export var loginActions = loginSlice.actions;
export var loginReducer = loginSlice.reducer;
