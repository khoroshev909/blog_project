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
import { useRef, } from 'react';
import useInfiniteScroll from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle';
import { scrollActions } from './ScrollSave/model/slice/scrollSlice';
import { getScrollPagePosition } from './ScrollSave/model/selectors/scrollSaveSelectors';
import cls from './Page.module.scss';
export var Page = function (_a) {
    var className = _a.className, onScrollEnd = _a.onScrollEnd, children = _a.children, _b = _a.listenScroll, listenScroll = _b === void 0 ? false : _b;
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var scrollPosition = useSelector(function (state) { return getScrollPagePosition(state, pathname); });
    useInitialEffect(function () {
        if (listenScroll) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    });
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });
    var onScroll = useThrottle(function (e) {
        dispatch(scrollActions.setScrollPosition({
            pageUrl: pathname,
            scrollTop: e.currentTarget.scrollTop,
        }));
    }, 500);
    return (_jsxs("section", __assign({ onScroll: listenScroll ? onScroll : undefined, ref: wrapperRef, className: classNames(cls.Page, {}, [className]) }, { children: [children, onScrollEnd && _jsx("div", { ref: triggerRef, className: cls.trigger }, void 0)] }), void 0));
};
