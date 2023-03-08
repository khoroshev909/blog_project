import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';
import { Profile } from '../../model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { api } = thunkAPI.extra;
        const formData = getProfileForm(thunkAPI.getState());
        try {
            const response = await api.put('/profile', formData);

            if (!response?.data) {
                throw Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Profile Error');
        }
    },
);
