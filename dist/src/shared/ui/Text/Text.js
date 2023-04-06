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
import cls from './Text.module.scss';
export var TextTheme;
(function (TextTheme) {
    TextTheme["PRIMARY"] = "";
    TextTheme["ERROR"] = "error";
})(TextTheme || (TextTheme = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "left";
    TextAlign["RIGHT"] = "right";
    TextAlign["CENTER"] = "center";
})(TextAlign || (TextAlign = {}));
export var TextSize;
(function (TextSize) {
    TextSize["M"] = "size_m";
    TextSize["L"] = "size_l";
})(TextSize || (TextSize = {}));
export var Text = memo(function (_a) {
    var className = _a.className, text = _a.text, title = _a.title, _b = _a.theme, theme = _b === void 0 ? TextTheme.PRIMARY : _b, _c = _a.align, align = _c === void 0 ? TextAlign.LEFT : _c, _d = _a.size, size = _d === void 0 ? TextSize.M : _d;
    return (_jsxs("div", __assign({ className: classNames('', {}, [className, cls[theme], cls[align], cls[size]]) }, { children: [title && _jsx("p", __assign({ className: cls.title }, { children: title }), void 0), text && _jsx("p", __assign({ className: cls.text }, { children: text }), void 0)] }), void 0));
});
