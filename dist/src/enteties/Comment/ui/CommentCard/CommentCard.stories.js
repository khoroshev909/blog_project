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
import { CommentCard } from './CommentCard';
export default {
    title: 'enteties/Comment',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(CommentCard, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    comment: {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
        },
        text: 'Some text',
        id: 'NjOGSYP',
    },
};
export var Loading = Template.bind({});
Loading.args = {
    comment: {
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
        },
        text: 'Some text',
        id: 'NjOGSYP',
    },
    loading: true,
};
