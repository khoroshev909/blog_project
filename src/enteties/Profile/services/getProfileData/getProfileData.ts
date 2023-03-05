import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../model/types/profile';

export const getProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/getProfileData',
    async (_, thunkAPI) => {
        const { api } = thunkAPI.extra;
        try {
            const response = await api.get('/profile');

            if (!response?.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Profile Error');
        }
    },
);
