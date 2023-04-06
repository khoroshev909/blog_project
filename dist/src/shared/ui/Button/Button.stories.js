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
import { Button, ButtonSize, ButtonTheme } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args), void 0); };
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export var Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};
export var OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
export var BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export var BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_M,
};
export var SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    size: ButtonSize.SIZE_M,
};
export var SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    size: ButtonSize.SIZE_L,
};
export var SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    size: ButtonSize.SIZE_XL,
};
export var SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_L,
};
export var SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_XL,
};
