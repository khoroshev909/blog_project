import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { validateProfileErrors } from '../validateProfileErrors/validateProfileErrors';
import { profileActions } from '../../model/slice/profileSlice';
import { Profile } from '../../model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
    'profile/updateProfileData',
    async (profileId, thunkAPI) => {
        const { api } = thunkAPI.extra;
        const formData = getProfileForm(thunkAPI.getState());
        const errors = validateProfileErrors(formData!);
        if (errors.length) {
            thunkAPI.dispatch(profileActions.setErrors(errors));
            throw Error;
        }
        try {
            const response = await api.put(`/profile/${profileId}`, formData);

            if (!response?.data) {
                throw Error();
            }
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Profile Error');
        }
    },
);
