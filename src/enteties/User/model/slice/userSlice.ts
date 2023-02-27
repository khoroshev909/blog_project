import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
