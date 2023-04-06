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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useRef, memo, } from 'react';
import cls from './Input.module.scss';
export var Input = memo(function (props) {
    var _a;
    var className = props.className, autoFocus = props.autoFocus, value = props.value, label = props.label, onChange = props.onChange, readOnly = props.readOnly, _b = props.type, type = _b === void 0 ? 'text' : _b, placeholder = props.placeholder, rest = __rest(props, ["className", "autoFocus", "value", "label", "onChange", "readOnly", "type", "placeholder"]);
    var inputRef = useRef(null);
    var changeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    useEffect(function () {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);
    var mods = (_a = {},
        _a[cls.readonly] = readOnly,
        _a);
    return (_jsxs("div", __assign({ className: classNames(cls.InputWrapper, mods, [className]) }, { children: [label && (_jsx("div", { children: label }, void 0)), _jsx("input", __assign({ placeholder: placeholder || '', ref: inputRef, className: cls.Input, readOnly: readOnly }, rest, { type: type, value: value, onChange: changeHandler }), void 0)] }), void 0));
});
