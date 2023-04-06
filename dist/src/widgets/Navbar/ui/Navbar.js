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
import { useCallback, useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User/model/selectors/getUserAuthData';
import { userActions } from 'enteties/User';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var closeModal = useCallback(function () { return setIsAuthModal(false); }, []);
    var user = useSelector(getUserAuthData);
    var logoutHandler = function () {
        dispatch(userActions.logout());
        navigate('/');
    };
    if (!user) {
        return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.links }, { children: _jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND_INVERTED, onClick: function () { return setIsAuthModal(true); } }, { children: t('login') }), void 0) }), void 0), isAuthModal && (_jsx(LoginModal, { isOpen: isAuthModal, onClose: closeModal }, void 0))] }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: _jsx("div", __assign({ className: cls.links }, { children: _jsx(Button, __assign({ theme: ButtonTheme.BACKGROUND_INVERTED, onClick: logoutHandler }, { children: t('logout') }), void 0) }), void 0) }), void 0));
});
