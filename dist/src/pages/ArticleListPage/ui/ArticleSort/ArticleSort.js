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
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import cls from './ArticleSort.module.scss';
import { ArticleSortType } from '../../model/types/articleListSchema';
export var ArticleSort = memo(function (props) {
    var className = props.className, sort = props.sort, order = props.order, onChangeSort = props.onChangeSort, onChangeOrder = props.onChangeOrder;
    var t = useTranslation().t;
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            text: t('asc'),
        },
        {
            value: 'desc',
            text: t('desc'),
        },
    ]; }, [t]);
    var sortOptions = useMemo(function () { return [
        {
            value: ArticleSortType.CREATED_AT,
            text: t('byDate'),
        },
        {
            value: ArticleSortType.VIEWS,
            text: t('byViews'),
        },
        {
            value: ArticleSortType.TITLE,
            text: t('byTitle'),
        },
    ]; }, [t]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleSort, {}, [className]) }, { children: [_jsx(Select, { label: t('sortBy'), options: sortOptions, value: sort, onChange: onChangeSort }, void 0), _jsx(Select, { label: t('sortOrder'), options: orderOptions, value: order, onChange: onChangeOrder }, void 0)] }), void 0));
});
