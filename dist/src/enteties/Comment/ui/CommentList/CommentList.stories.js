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
import { CommentList } from './CommentList';
export default {
    title: 'enteties/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(CommentList, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
            },
            text: 'Some text',
            id: 'NjOGSYP',
        },
        {
            user: {
                id: '2',
                username: 'user',
                avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
            },
            text: 'Some other text',
            id: 'NjOGSYP111',
        },
    ],
    loading: false,
};
export var Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
            },
            text: 'Some text',
            id: 'NjOGSYP',
        },
        {
            user: {
                id: '2',
                username: 'user',
                avatar: 'https://avatars.mds.yandex.net/i?id=8dff73fec96ef7bfce66de8320a3a3ef147dfbc0-4614822-images-thumbs&n=13&exp=1',
            },
            text: 'Some other text',
            id: 'NjOGSYP111',
        },
    ],
    loading: true,
};
