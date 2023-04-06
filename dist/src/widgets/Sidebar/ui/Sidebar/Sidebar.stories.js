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
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { Sidebar } from './Sidebar';
export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Sidebar, __assign({}, args), void 0); };
export var SidebarLight = Template.bind({});
SidebarLight.args = {};
SidebarLight.decorators = [StoreDecorator({})];
export var SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({})];
export var Logged = Template.bind({});
Logged.args = {};
Logged.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({ user: { authData: {} } })];
