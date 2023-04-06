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
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { updateProfileData } from 'pages/ProfilePage/services/updateProfileData/updateProfileData';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User';
import { getProfileData } from 'pages/ProfilePage/model/selectors/getProfileData/getProfileData';
import cls from './ProfilePageHeader.module.scss';
import { profileActions } from '../../model/slice/profileSlice';
export var ProfilePageHeader = function (_a) {
    var _b, _c, _d;
    var className = _a.className, readonly = _a.readonly;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var profileId = (_b = useSelector(getProfileData)) === null || _b === void 0 ? void 0 : _b.id;
    var canEdit = ((_c = useSelector(getUserAuthData)) === null || _c === void 0 ? void 0 : _c.id) === ((_d = useSelector(getProfileData)) === null || _d === void 0 ? void 0 : _d.id);
    var onAllowEdit = function () {
        dispatch(profileActions.setReadonly(false));
    };
    var onCancelEdit = function () {
        dispatch(profileActions.cancelFormEdit());
    };
    var onSave = function () {
        if (profileId)
            dispatch(updateProfileData(profileId));
    };
    return (_jsxs("div", __assign({ className: classNames(cls.ProfilePageHeader, {}, [className]) }, { children: [_jsx(Text, { title: t('profile') }, void 0), canEdit && (readonly ? (_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINED, onClick: onAllowEdit }, { children: t('edit') }), void 0)) : (_jsxs("div", __assign({ className: cls.buttons }, { children: [_jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.RED, onClick: onSave }, { children: t('save') }), void 0), _jsx(Button, __assign({ className: cls.editBtn, theme: ButtonTheme.OUTLINED, onClick: onCancelEdit }, { children: t('cancel') }), void 0)] }), void 0)))] }), void 0));
};
