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
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User/model/selectors/getUserAuthData';
import cls from './SidebarItem.module.scss';
export var SidebarItem = function (props) {
    var _a;
    var t = useTranslation().t;
    var isLogged = useSelector(getUserAuthData);
    var item = props.item, collapsed = props.collapsed, className = props.className;
    var Icon = item.Icon, path = item.path, text = item.text;
    var mods = (_a = {}, _a[cls.collapsed] = collapsed, _a);
    if (item.needAuth && !isLogged) {
        return null;
    }
    return (_jsxs(AppLink, __assign({ className: classNames(cls.item, mods, [className]), to: path, theme: AppLinkTheme.SECONDARY }, { children: [_jsx(Icon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.link }, { children: t(text) }), void 0)] }), void 0));
};
