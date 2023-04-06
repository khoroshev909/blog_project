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
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader } from 'shared/lib/components/DynamycReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'enteties/Article/model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from 'enteties/Article/model/selectors/getArticleDetailsError';
import { getArticleDetailsLoading } from 'enteties/Article/model/selectors/getArticleDetailsLoading';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { Error } from 'shared/ui/Error/Error';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (_a) {
    var className = _a.className, id = _a.id;
    var dispatch = useAppDispatch();
    var data = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var loading = useSelector(getArticleDetailsLoading);
    useInitialEffect(function () {
        dispatch(fetchArticleById(id));
    });
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case 'TEXT':
                return (_jsx(ArticleTextBlockComponent, { block: block }, block.id));
            case 'CODE':
                return (_jsx(ArticleCodeBlockComponent, { block: block }, block.id));
            case 'IMAGE':
                return (_jsx(ArticleImageBlockComponent, { block: block }, block.id));
            default:
                return null;
        }
    }, []);
    var content;
    if (loading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }, void 0), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }, void 0)] }, void 0));
    }
    if (error) {
        content = _jsx(Error, {}, void 0);
    }
    if (data) {
        content = (_jsxs("div", __assign({ className: classNames('', {}, [className]) }, { children: [_jsx("div", __assign({ className: cls.AvatarWrapper }, { children: _jsx(Avatar, { src: data.img, size: 200 }, void 0) }), void 0), _jsx(Text, { title: data.title, text: data.subtitle, size: TextSize.L }, void 0), _jsxs("div", __assign({ className: cls.viewsWrapper }, { children: [_jsx(Icon, { Svg: EyeIcon }, void 0), _jsx("span", { children: data.views }, void 0)] }), void 0), _jsxs("div", __assign({ className: cls.calendarWrapper }, { children: [_jsx(Icon, { Svg: CalendarIcon }, void 0), _jsx("span", { children: data.createdAt }, void 0)] }), void 0), data.blocks.map(renderBlock)] }), void 0));
    }
    return (_jsx(DynamicReducerLoader, __assign({ reducers: reducers }, { children: content }), void 0));
});
