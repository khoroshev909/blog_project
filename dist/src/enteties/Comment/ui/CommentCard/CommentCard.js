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
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';
export var CommentCard = function (_a) {
    var className = _a.className, comment = _a.comment, loading = _a.loading;
    if (loading) {
        return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className]) }, { children: [_jsxs("div", __assign({ className: classNames(cls.header, {}, [className]) }, { children: [_jsx(Skeleton, { width: 30, height: 30, border: "50%" }, void 0), _jsx(Skeleton, { className: cls.username, width: 100, height: 20 }, void 0)] }), void 0), _jsx(Skeleton, { width: "100%", height: 50 }, void 0)] }), void 0));
    }
    return (_jsxs("div", __assign({ className: classNames(cls.CommentCard, {}, [className]) }, { children: [_jsxs("div", __assign({ className: classNames(cls.header, {}, [className]) }, { children: [comment.user.avatar && (_jsx(Avatar, { src: comment.user.avatar, size: 30 }, void 0)), _jsx(AppLink, __assign({ to: "/profile/".concat(comment.user.id) }, { children: _jsx(Text, { className: cls.username, title: comment.user.username }, void 0) }), void 0)] }), void 0), _jsx(Text, { text: comment.text }, void 0)] }), void 0));
};
