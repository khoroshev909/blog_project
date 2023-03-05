import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'enteties/User';
import { USER_AUTH_DATA_KEY } from 'shared/config/const';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface loginByUsernamePayload {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernamePayload, ThunkConfig>(
    'login/loginByUsername',
    async (payload, thunkAPI) => {
        const { api, navigate } = thunkAPI.extra;
        try {
            const response = await api.post('/login', payload);

            if (!response?.data) {
                throw Error();
            }

            localStorage.setItem(USER_AUTH_DATA_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            if (navigate) {
                navigate('/profile');
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('loginError');
        }
    },
);
