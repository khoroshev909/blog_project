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
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ErrorAlert.module.scss';
export var ErrorAlert = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var reloadPage = function () {
        window.location.reload();
    };
    return (_jsxs("div", __assign({ className: classNames(cls.ErrorAlert, {}, [className]) }, { children: [_jsx("h4", { children: t('somethingWentWrong') }, void 0), _jsx(Button, __assign({ onClick: reloadPage }, { children: t('reloadThePage') }), void 0)] }), void 0));
};
