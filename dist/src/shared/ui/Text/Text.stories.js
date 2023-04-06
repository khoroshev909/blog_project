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
import { Text, TextTheme } from './Text';
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Text, __assign({}, args), void 0); };
export var TitleAndText = Template.bind({});
TitleAndText.args = {
    title: 'Title',
    text: 'Text',
};
export var Title = Template.bind({});
Title.args = {
    title: 'Title',
};
export var OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text',
};
export var Dark = Template.bind({});
Dark.args = {
    title: 'Title',
    text: 'Text',
};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
export var Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR,
};
