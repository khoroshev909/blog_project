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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, getArticleDetailsData } from 'enteties/Article';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { DynamicReducerLoader } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { CommentList } from 'enteties/Comment';
import { getArticleCommentsLoading, } from 'pages/ArticleDetailsPage/model/selectors/articleCommentsSelectors';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { useCallback, useEffect } from 'react';
import { addCommentForArticle, } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/Button/Button';
import { Page } from 'widgets/Page';
import { articleDetailsActions } from 'enteties/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsActions, articleDetailsCommentsReducer, getArticleComments, } from '../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var comments = useSelector(getArticleComments.selectAll);
    var loading = useSelector(getArticleCommentsLoading);
    var articleData = useSelector(getArticleDetailsData);
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var goBack = function () {
        navigate(String(routeConfig.article_list.path));
    };
    useInitialEffect(function () { return dispatch(fetchCommentsByArticleId(id)); });
    useEffect(function () { return function () {
        dispatch(articleDetailsActions.clearArticleDetails());
        dispatch(articleDetailsCommentsActions.clearComments());
    }; }, [dispatch]);
    var onAddComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (_jsx(Text, { title: t('articleNotFound') }, void 0));
    }
    return (_jsx(DynamicReducerLoader, __assign({ reducers: reducers }, { children: _jsxs(Page, { children: [_jsx(Button, __assign({ onClick: goBack }, { children: t('backToArticles') }), void 0), _jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx(ArticleDetails, { id: id }, void 0), articleData && (_jsxs(_Fragment, { children: [_jsx(Text, { className: cls.comments, title: t('comments') }, void 0), _jsx(AddCommentForm, { className: cls.commentForm, onAddComment: onAddComment }, void 0), _jsx(CommentList, { comments: comments, loading: loading }, void 0)] }, void 0))] }), void 0)] }, void 0) }), void 0));
};
export default ArticleDetailsPage;
