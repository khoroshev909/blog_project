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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { ProfileCard } from 'enteties/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'pages/ProfilePage/model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import { getValidateErrors } from '../../model/selectors/getValidateErrors/getValidateErrors';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoding';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';
var reducers = { profile: profileReducer };
var ProfilePage = memo(function (_a) {
    var className = _a.className;
    var id = useParams().id;
    var dispatch = useAppDispatch();
    var formData = useSelector(getProfileForm);
    var loading = useSelector(getProfileLoading);
    var error = useSelector(getProfileError);
    var readonly = useSelector(getProfileReadonly);
    var validateErrors = useSelector(getValidateErrors);
    var onChangeFirstName = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { first: val })));
    };
    var onChangeLastName = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { lastname: val })));
    };
    var onChangeAge = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { age: Number(val) })));
    };
    var onChangeCountry = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { country: val })));
    };
    var onChangeUsername = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { username: val })));
    };
    var onCurrencyChange = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { currency: val })));
    };
    var onChangeAvatar = function (val) {
        dispatch(profileActions.setProfileFormData(__assign(__assign({}, formData), { avatar: val })));
    };
    useInitialEffect(function () {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });
    return (_jsx(DynamicReducerLoader, __assign({ reducers: reducers }, { children: _jsxs(Page, __assign({ className: classNames('', {}, [className]) }, { children: [!!(validateErrors === null || validateErrors === void 0 ? void 0 : validateErrors.length) && validateErrors.map(function (error) { return (_jsx(Text, { text: error, theme: TextTheme.ERROR }, error)); }), _jsx(ProfilePageHeader, { readonly: readonly }, void 0), _jsx(ProfileCard, { data: formData, error: error, loading: loading, onChangeUsername: onChangeUsername, onCurrencyChange: onCurrencyChange, onChangeAvatar: onChangeAvatar, onChangeFirstName: onChangeFirstName, onChangeLastName: onChangeLastName, onChangeAge: onChangeAge, onChangeCountry: onChangeCountry, readonly: readonly }, void 0)] }), void 0) }), void 0));
});
export default ProfilePage;
