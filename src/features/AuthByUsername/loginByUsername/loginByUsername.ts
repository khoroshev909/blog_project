import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'enteties/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_AUTH_DATA_KEY } from 'shared/config/const';

interface loginByUsernamePayload {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernamePayload, { rejectValue: string }>(
    'login/loginByUsername',
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', payload);

            if (!response?.data) {
                throw Error();
            }

            localStorage.setItem(USER_AUTH_DATA_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('loginError');
        }
    },
);
