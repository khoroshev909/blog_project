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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
export var ButtonTheme;
(function (ButtonTheme) {
    ButtonTheme["CLEAR"] = "clear";
    ButtonTheme["CLEAR_INVERTED"] = "clear-inverted";
    ButtonTheme["OUTLINED"] = "outlined";
    ButtonTheme["BACKGROUND"] = "background";
    ButtonTheme["BACKGROUND_INVERTED"] = "backgroundInverted";
    ButtonTheme["RED"] = "red";
})(ButtonTheme || (ButtonTheme = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["SIZE_M"] = "size-m";
    ButtonSize["SIZE_L"] = "size-l";
    ButtonSize["SIZE_XL"] = "size-xl";
})(ButtonSize || (ButtonSize = {}));
export var Button = memo(function (_a) {
    var _b;
    var className = _a.className, children = _a.children, theme = _a.theme, disabled = _a.disabled, square = _a.square, _c = _a.size, size = _c === void 0 ? ButtonSize.SIZE_M : _c, rest = __rest(_a, ["className", "children", "theme", "disabled", "square", "size"]);
    var mods = (_b = {},
        _b[cls.square] = square,
        _b[cls.disabled] = disabled,
        _b);
    return (_jsx("button", __assign({ type: "button", disabled: disabled, className: classNames(cls.Button, mods, [className, (theme && cls[theme]), cls[size]]) }, rest, { children: children }), void 0));
});
