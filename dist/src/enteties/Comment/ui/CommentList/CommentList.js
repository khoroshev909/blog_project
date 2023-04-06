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
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { CommentCard } from '../CommentCard/CommentCard';
export var CommentList = memo(function (_a) {
    var className = _a.className, comments = _a.comments, loading = _a.loading;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: (comments === null || comments === void 0 ? void 0 : comments.length) ? (comments.map(function (comment) { return (_jsx(CommentCard, { loading: loading, comment: comment }, comment.id)); })) : (_jsx(Text, { text: t('noComments') }, void 0)) }), void 0));
});
