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
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from 'enteties/Article';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './EntetiesView.module.scss';
export var EntetiesView = memo(function (_a) {
    var className = _a.className, view = _a.view, changeView = _a.changeView;
    var onClick = function (view) { return function () {
        changeView === null || changeView === void 0 ? void 0 : changeView(view);
    }; };
    return (_jsxs("div", __assign({ className: classNames(cls.EntetiesView, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onClick(ArticleView.BIG) }, { children: _jsx(Icon, { Svg: ListIcon, className: view === ArticleView.BIG ? cls.active : '' }, void 0) }), void 0), _jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onClick(ArticleView.SMALL) }, { children: _jsx(Icon, { Svg: TileIcon, className: view === ArticleView.SMALL ? cls.active : '' }, void 0) }), void 0)] }), void 0));
});
