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
import { ArticleView } from 'enteties/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { ArticleSkeleton } from './ArticleSkeleton';
export default {
    title: 'enteties/ArticleSkeleton',
    component: ArticleSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ArticleSkeleton, __assign({}, args), void 0); };
export var Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
};
export var Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
};
export var SmallDark = Template.bind({});
SmallDark.args = {
    view: ArticleView.SMALL,
};
SmallDark.decorators = [ThemeDecorator(THEMES.DARK)];
export var BigDark = Template.bind({});
BigDark.args = {
    view: ArticleView.BIG,
};
BigDark.decorators = [ThemeDecorator(THEMES.DARK)];
