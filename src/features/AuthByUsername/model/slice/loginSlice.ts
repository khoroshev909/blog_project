import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginByUsername } from '../../loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    error: undefined,
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.username = action.payload.username;
                state.error = undefined;
                state.loading = false;
            })
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
