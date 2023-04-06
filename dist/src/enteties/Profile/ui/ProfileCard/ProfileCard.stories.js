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
import { ProfileCard } from './ProfileCard';
export default {
    title: 'enteties/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfileCard, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        first: 'Тимур',
        lastname: 'Ульби',
        avatar: 'https://avatars.mds.yandex.net/i?id=b2a8579e7806b8e45105c7c072ec35dab25a20e2-8297859-images-thumbs&n=13',
        city: 'Tuymen',
    },
};
export var Loading = Template.bind({});
Loading.args = {
    loading: true,
};
export var Error = Template.bind({});
Error.args = {
    error: 'error',
};
