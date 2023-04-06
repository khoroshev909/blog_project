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
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton';
import { ArticleItem } from '../ArticleItem/ArticleItem';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/types/article';
var renderSkeletons = function (view) { return (_jsx("div", __assign({ className: classNames(cls.ArticleList, {}, ['', cls[view]]) }, { children: new Array(view === ArticleView.BIG ? 4 : 9)
        .fill('')
        .map(function (_, idx) { return (_jsx(ArticleSkeleton, { view: view }, idx)); }) }), void 0)); };
export var ArticleList = memo(function (_a) {
    var className = _a.className, articles = _a.articles, loading = _a.loading, _b = _a.view, view = _b === void 0 ? ArticleView.SMALL : _b;
    var t = useTranslation().t;
    var renderArticle = function (article) { return (_jsx(ArticleItem, { className: cls.ArticleItem, article: article, view: view }, article.id)); };
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleList, {}, [className, cls[view]]) }, { children: [articles.length ? (articles.map(renderArticle)) : null, loading && renderSkeletons(view)] }), void 0));
});
