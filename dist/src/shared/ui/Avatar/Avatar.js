import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
export var Avatar = function (_a) {
    var className = _a.className, src = _a.src, size = _a.size, _b = _a.alt, alt = _b === void 0 ? 'avatar' : _b;
    var mods = {};
    var styles = useMemo(function () { return ({
        height: size,
        width: size,
    }); }, [size]);
    return (_jsx("img", { className: classNames(cls.Avatar, mods, [className]), alt: alt, style: styles, src: src }, void 0));
};
