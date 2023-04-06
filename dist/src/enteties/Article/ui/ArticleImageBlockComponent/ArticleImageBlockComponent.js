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
import { Image } from 'shared/ui/Image/Image';
import cls from './ArticleImageBlockComponent.module.scss';
export var ArticleImageBlockComponent = memo(function (_a) {
    var className = _a.className, block = _a.block;
    return (_jsx("div", __assign({ className: cls.ArticleImageBlockComponent }, { children: _jsx(Image, { block: block, title: block === null || block === void 0 ? void 0 : block.title }, void 0) }), void 0));
});
