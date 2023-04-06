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
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { memo, useCallback } from 'react';
import cls from './Code.module.scss';
export var Code = memo(function (_a) {
    var className = _a.className, text = _a.text;
    var onCopy = useCallback(function () {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (_jsxs("pre", __assign({ className: classNames(cls.Code, {}, [className]) }, { children: [_jsx(Button, __assign({ className: cls.copyBtn, theme: ButtonTheme.CLEAR, onClick: onCopy }, { children: _jsx(CopyIcon, { className: cls.copyIcon }, void 0) }), void 0), _jsx("code", { children: text }, void 0)] }), void 0));
});
