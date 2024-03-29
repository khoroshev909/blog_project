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
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import cls from './ArticleTextBlockComponent.module.scss';
export var ArticleTextBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(Text, { title: block.title }, void 0), block.paragraphs.map(function (text) { return (_jsx(Text, { text: text, className: cls.title }, text)); })] }), void 0));
});
