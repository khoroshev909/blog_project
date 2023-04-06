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
import { THEMES, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
export var ThemeSwitcher = memo(function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var _c = useTheme(), toggleTheme = _c.toggleTheme, theme = _c.theme;
    return (_jsx(Button, __assign({ onClick: toggleTheme, className: classNames('', {}, [className]), theme: ButtonTheme.CLEAR }, { children: theme === THEMES.DARK ? _jsx(DarkIcon, {}, void 0) : _jsx(LightIcon, {}, void 0) }), void 0));
});
