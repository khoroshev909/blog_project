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
import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoutes } from 'app/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthMounted, userActions } from 'enteties/User';
var App = function () {
    var theme = useTheme().theme;
    var dispatch = useDispatch();
    var isMounted = useSelector(getAuthMounted);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames('app', {}, [theme]) }, { children: _jsxs(Suspense, __assign({ fallback: "" }, { children: [_jsx(Navbar, {}, void 0), _jsxs("div", __assign({ className: "content-page" }, { children: [_jsx(Sidebar, {}, void 0), isMounted && _jsx(AppRoutes, {}, void 0)] }), void 0)] }), void 0) }), void 0));
};
export default App;
