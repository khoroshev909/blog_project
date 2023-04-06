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
import { EntetiesView } from 'features/EntetiesView';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticleList } from 'pages/ArticleListPage/model/services/fetchArticleList/fetchArticleList';
import { Card } from 'shared/ui/Card/Card';
import { ArticleSort } from '../ArticleSort/ArticleSort';
import { getArticleListView, getArticleSearch, getArticleSort, getArticleSortOrder, } from '../../model/selectors/articleListSelectors';
import { articleListActions } from '../../model/slices/articleListReducer';
import cls from './ArticleFilters.module.scss';
export var ArticleFilters = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticleListView);
    var sort = useSelector(getArticleSort);
    var order = useSelector(getArticleSortOrder);
    var search = useSelector(getArticleSearch);
    var changeViewHandler = useCallback(function (view) {
        dispatch(articleListActions.setLimit(view));
        dispatch(articleListActions.setView(view));
    }, [dispatch]);
    var onChangeOrder = useCallback(function (newOrder) {
        dispatch(articleListActions.setPage(1));
        dispatch(articleListActions.setOrder(newOrder));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);
    var onChangeSort = useCallback(function (newSort) {
        dispatch(articleListActions.setPage(1));
        dispatch(articleListActions.setSort(newSort));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);
    var onSearch = useCallback(function (val) {
        dispatch(articleListActions.setSearch(val));
        if (val.length > 2) {
            dispatch(articleListActions.setPage(1));
            dispatch(fetchArticleList({ replace: true }));
        }
    }, [dispatch]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleFilters, {}, [className]) }, { children: [_jsxs("div", __assign({ className: cls.sort }, { children: [_jsx(ArticleSort, { sort: sort, order: order, onChangeOrder: onChangeOrder, onChangeSort: onChangeSort }, void 0), _jsx(EntetiesView, { view: view, changeView: changeViewHandler }, void 0)] }), void 0), _jsx(Card, __assign({ className: cls.search }, { children: _jsx(Input, { onChange: onSearch, value: search, placeholder: t('search') }, void 0) }), void 0)] }), void 0));
});
