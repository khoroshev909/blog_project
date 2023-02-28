import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_AUTH_DATA_KEY } from 'shared/config/const';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
        initAuthData(state) {
            const user = JSON.parse(localStorage.getItem(USER_AUTH_DATA_KEY));
            if (user) {
                state.authData = user;
            }
        },
        logout(state) {
            state.authData = undefined;
            localStorage.removeItem(USER_AUTH_DATA_KEY);
        },
    },
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
