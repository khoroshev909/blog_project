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
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};
var Template = function (args) { return _jsx(AppLink, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
export var PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
export var SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
export var RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(THEMES.DARK)];
