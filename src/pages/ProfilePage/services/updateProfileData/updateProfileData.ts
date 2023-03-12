import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';
import { validateProfileErrors } from 'pages/ProfilePage/services/validateProfileErrors/validateProfileErrors';
import { profileActions } from 'pages/ProfilePage/model/slice/profileSlice';
import { Profile } from '../../model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { api } = thunkAPI.extra;
        const formData = getProfileForm(thunkAPI.getState());
        const errors = validateProfileErrors(formData!);
        if (errors.length) {
            thunkAPI.dispatch(profileActions.setErrors(errors));
            throw Error;
        }
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
