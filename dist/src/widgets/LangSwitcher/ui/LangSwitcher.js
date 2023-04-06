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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
export var LangSwitcher = memo(function (_a) {
    var className = _a.className, short = _a.short;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    var toggleLanguage = function () { return i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en'); };
    return (_jsx(Button, __assign({ className: classNames(cls.LangSwitcher, {}, [className]), theme: ButtonTheme.CLEAR, onClick: toggleLanguage }, { children: t(short ? 'shortLang' : 'language') }), void 0));
});
