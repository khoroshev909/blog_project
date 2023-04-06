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
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleItem.module.scss';
import { ArticleBlockType, ArticleView, } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
export var ArticleItem = memo(function (_a) {
    var className = _a.className, article = _a.article, _b = _a.view, view = _b === void 0 ? ArticleView.SMALL : _b;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var onArticleNavigate = function () {
        navigate("".concat(routeConfig.article_list.path, "/").concat(article.id));
    };
    var types = (_jsx(Text, { className: cls.types, text: article.type.join(', ') }, void 0));
    var views = (_jsxs("div", __assign({ className: cls.views }, { children: [_jsx(Icon, { Svg: EyeIcon }, void 0), _jsx(Text, { text: String(article.views) }, void 0)] }), void 0));
    var textBlock;
    if (ArticleView.BIG) {
        textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
    }
    if (view === ArticleView.SMALL) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, __assign({ onClick: onArticleNavigate }, { children: [_jsxs("div", __assign({ className: cls.imageWrapper }, { children: [_jsx("img", { src: article.img, alt: article.title }, void 0), _jsx(Text, { className: cls.date, text: article.createdAt }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.infoWrapper }, { children: [types, views] }), void 0), _jsx(Text, { className: cls.title, text: article.title }, void 0)] }), void 0) }), void 0));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleItem, {}, [className, cls[view]]) }, { children: _jsxs(Card, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsxs("div", __assign({ className: cls.author }, { children: [_jsx(Avatar, { src: article.user.avatar || '', size: 30 }, void 0), _jsx(Text, { className: cls.username, text: article.user.username }, void 0)] }), void 0), _jsx(Text, { className: cls.createdAt, text: article.createdAt }, void 0)] }), void 0), _jsx(Text, { className: cls.title, title: article.title }, void 0), types, _jsx("img", { src: article.img, alt: article.title, className: cls.image }, void 0), textBlock && (_jsx(ArticleTextBlockComponent, { className: cls.text, block: textBlock }, void 0)), _jsxs("div", __assign({ className: cls.footer }, { children: [_jsx(Button, __assign({ onClick: onArticleNavigate }, { children: t('readMore') }), void 0), views] }), void 0)] }, void 0) }), void 0));
});
