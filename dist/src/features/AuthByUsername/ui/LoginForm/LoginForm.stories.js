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
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(LoginForm, __assign({}, args), void 0); };
export var Form = Template.bind({});
Form.args = {};
Form.decorators = [
    StoreDecorator({ loginForm: { username: 'admin', password: '123' } }),
];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({ loginForm: { username: 'admin', password: '123' } }),
    ThemeDecorator(THEMES.DARK),
];
export var Loading = Template.bind({});
Form.args = {};
Loading.decorators = [
    StoreDecorator({ loginForm: { loading: true } }),
];
export var Error = Template.bind({});
Form.args = {};
Error.decorators = [
    StoreDecorator({ loginForm: { error: 'error' } }),
];
