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
import { useMemo } from 'react';
import cls from './Select.module.scss';
export var Select = function (props) {
    var className = props.className, label = props.label, value = props.value, options = props.options, onChange = props.onChange, readonly = props.readonly;
    var mods = {};
    var optionList = useMemo(function () { return options.map(function (opt) { return (_jsx("option", __assign({ value: opt.value, className: cls.option }, { children: opt.text }), opt.value)); }); }, [options]);
    var onChangeHandler = function (e) {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (_jsxs("div", __assign({ className: classNames(cls.SelectWrapper, mods, [className]) }, { children: [label && (_jsx("span", __assign({ className: cls.label }, { children: label }), void 0)), _jsx("select", __assign({ disabled: readonly, onChange: onChangeHandler, value: value, className: cls.select }, { children: optionList }), void 0)] }), void 0));
};
