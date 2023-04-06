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
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { memo } from 'react';
import cls from './ArticleSkeleton.module.scss';
import { ArticleView } from '../../model/types/article';
export var ArticleSkeleton = memo(function (_a) {
    var className = _a.className, view = _a.view;
    return (_jsx("div", __assign({ className: classNames('', {}, [className, cls[view]]) }, { children: view === ArticleView.SMALL ? (_jsxs(Card, __assign({ className: cls.card }, { children: [_jsx("div", __assign({ className: cls.imageWrapper }, { children: _jsx(Skeleton, { width: 200, height: 200 }, void 0) }), void 0), _jsx("div", __assign({ className: cls.infoWrapper }, { children: _jsx(Skeleton, { width: 120, height: 30 }, void 0) }), void 0), _jsx(Skeleton, { width: 180, height: 30 }, void 0)] }), void 0)) : (_jsxs(Card, __assign({ className: cls.card }, { children: [_jsx("div", __assign({ className: cls.header }, { children: _jsxs("div", __assign({ className: cls.author }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }, void 0), _jsx(Skeleton, { className: cls.username, width: 100, height: 20 }, void 0)] }), void 0) }), void 0), _jsx(Skeleton, { className: cls.title, width: 180, height: 30 }, void 0), _jsx(Skeleton, { className: cls.image, width: "100%", height: 200 }, void 0), _jsx(Skeleton, { width: "100%", height: 150 }, void 0), _jsx("div", __assign({ className: cls.footer }, { children: _jsx(Skeleton, { width: 120, height: 30 }, void 0) }), void 0)] }), void 0)) }), void 0));
});
