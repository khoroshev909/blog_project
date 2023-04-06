var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createSlice } from '@reduxjs/toolkit';
import { updateProfileData } from 'pages/ProfilePage/services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
var initialState = {
    profile: undefined,
    form: undefined,
    loading: true,
    error: undefined,
    readonly: true,
    validateErrors: [],
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setErrors: function (state, action) {
            state.validateErrors = action.payload;
        },
        cancelFormEdit: function (state) {
            state.form = state.profile;
            state.readonly = true;
            state.validateErrors = [];
        },
        setFormData: function (state) {
            state.form = __assign({}, state.profile);
        },
        setProfileFormData: function (state, action) {
            state.form = __assign(__assign({}, state.form), action.payload);
        },
        setReadonly: function (state, action) {
            state.readonly = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchProfileData.fulfilled, function (state, action) {
            state.profile = action.payload;
            state.form = action.payload;
            state.loading = false;
        })
            .addCase(fetchProfileData.pending, function (state) {
            state.error = undefined;
            state.loading = true;
            state.validateErrors = [];
        })
            .addCase(fetchProfileData.rejected, function (state, action) {
            state.error = action.payload;
            state.loading = false;
        })
            .addCase(updateProfileData.fulfilled, function (state, action) {
            state.profile = action.payload;
            state.form = action.payload;
            state.loading = false;
            state.readonly = true;
            state.validateErrors = [];
        })
            .addCase(updateProfileData.pending, function (state) {
            state.error = undefined;
            state.loading = true;
            state.validateErrors = [];
        })
            .addCase(updateProfileData.rejected, function (state, action) {
            state.error = action.payload;
            state.loading = false;
        });
    },
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
