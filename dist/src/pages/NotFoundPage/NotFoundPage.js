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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './NotFoundPage.module.scss';
export var NotFoundPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx(Page, __assign({ className: classNames(cls.NotFoundPage, {}, [className]) }, { children: _jsx("h4", { children: t('notFound') }, void 0) }), void 0));
});
