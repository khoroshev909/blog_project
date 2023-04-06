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
import AddCommentForm from './AddCommentForm';
export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(AddCommentForm, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    onAddComment: function () { return null; },
};
Primary.decorators = [StoreDecorator({})];
