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
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebatItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
export var Sidebar = memo(function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? '' : _c;
    var _d = useState(false), collapsed = _d[0], setCollapsed = _d[1];
    var sidebarItems = useSelector(getSidebarItems);
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx("div", __assign({ className: cls.items }, { children: sidebarItems.map(function (item) { return (_jsx(SidebarItem, { item: item, collapsed: collapsed }, item.path)); }) }), void 0), _jsx(Button, __assign({ className: cls.sidebarBtn, theme: ButtonTheme.BACKGROUND_INVERTED, square: true, size: ButtonSize.SIZE_L, "data-testid": "toggle-button", onClick: function () { return setCollapsed(function (prev) { return !prev; }); } }, { children: collapsed ? '>' : '<' }), void 0), _jsxs("div", __assign({ className: cls.sidebarSwitchers }, { children: [_jsx(ThemeSwitcher, {}, void 0), _jsx(LangSwitcher, { short: collapsed }, void 0)] }), void 0)] }), void 0));
});
