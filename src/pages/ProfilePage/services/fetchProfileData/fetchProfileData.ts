import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { api } = thunkAPI.extra;
        try {
            const response = await api.get(`/profile/${profileId}`);

            if (!response?.data) {
                throw Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Profile Error');
        }
    },
);
