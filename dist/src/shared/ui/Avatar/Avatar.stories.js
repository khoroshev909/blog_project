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
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';
export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        size: 150,
    },
};
var Template = function (args) { return _jsx(Avatar, __assign({}, args), void 0); };
export var Picture = Template.bind({});
Picture.args = {
    src: AvatarImg,
};
