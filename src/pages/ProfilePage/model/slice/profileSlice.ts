import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from 'pages/ProfilePage/services/updateProfileData/updateProfileData';
import { Profile, ProfileSchema, ValidateErrors } from '../types/profile';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
    profile: undefined,
    form: undefined,
    loading: true,
    error: undefined,
    readonly: true,
    validateErrors: [],
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setErrors(state, action: PayloadAction<ValidateErrors[]>) {
            state.validateErrors = action.payload;
        },
        cancelFormEdit(state) {
            state.form = state.profile;
            state.readonly = true;
            state.validateErrors = [];
        },
        setFormData(state) {
            state.form = {
                ...state.profile,
            };
        },
        setProfileFormData(state, action: PayloadAction<Profile>) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        setReadonly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.form = action.payload;
                state.loading = false;
            })
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
                state.validateErrors = [];
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.form = action.payload;
                state.loading = false;
                state.readonly = true;
                state.validateErrors = [];
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.loading = true;
                state.validateErrors = [];
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
