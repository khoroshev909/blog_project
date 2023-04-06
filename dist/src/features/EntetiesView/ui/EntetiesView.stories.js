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
import { EntetiesView } from './EntetiesView';
export default {
    title: 'features/EntetiesView',
    component: EntetiesView,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(EntetiesView, __assign({}, args), void 0); };
export var List = Template.bind({});
List.args = {
    view: ArticleView.SMALL,
    changeView: function () { return null; },
};
export var Tile = Template.bind({});
Tile.args = {
    view: ArticleView.BIG,
    changeView: function () { return null; },
};
