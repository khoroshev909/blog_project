import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { getProfileData } from '../../services/getProfileData/getProfileData';

const initialState: ProfileSchema = {
    profile: undefined,
    loading: true,
    error: undefined,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.loading = false;
            })
            .addCase(getProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(getProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
