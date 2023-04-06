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
import { ArticleList } from 'enteties/Article';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { DynamicReducerLoader } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Page } from 'widgets/Page';
import { Error } from 'shared/ui/Error/Error';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleFilters } from 'pages/ArticleListPage/ui/ArticleFilters/ArticleFilters';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { getArticleListError, getArticleListLoading, getArticleListView, } from '../../model/selectors/articleListSelectors';
import { articleListReducer, getArticleList } from '../../model/slices/articleListReducer';
import { initArticleListPage } from '../../model/services/initArticleListPage/initArticleListPage';
var reducers = {
    articleList: articleListReducer,
};
var ArticleListPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(getArticleListView);
    var loading = useSelector(getArticleListLoading);
    var articles = useSelector(getArticleList.selectAll);
    var error = useSelector(getArticleListError);
    useInitialEffect(function () {
        dispatch(initArticleListPage());
    });
    var onAddNewPage = useCallback(function () {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);
    if (error) {
        return _jsx(Error, {}, void 0);
    }
    return (_jsx(DynamicReducerLoader, __assign({ reducers: reducers }, { children: _jsxs(Page, __assign({ listenScroll: true, onScrollEnd: onAddNewPage, className: classNames('', {}, [className]) }, { children: [!loading && !articles.length && (_jsx(Text, { title: t('noArticles') }, void 0)), _jsx(ArticleFilters, {}, void 0), _jsx(ArticleList, { articles: articles, loading: loading, view: view }, void 0)] }), void 0) }), void 0));
};
export default ArticleListPage;
