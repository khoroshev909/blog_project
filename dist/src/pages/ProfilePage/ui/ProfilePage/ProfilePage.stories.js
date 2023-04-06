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
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { Countries } from 'enteties/Country';
import { CurrencyEnum } from 'enteties/Currency';
import ProfilePage from './ProfilePage';
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(ProfilePage, __assign({}, args), void 0); };
export var Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
        profile: {
            form: {
                first: 'Eugene',
                lastname: 'Khoroshev',
                age: 27,
                currency: CurrencyEnum.RUB,
                country: Countries.RUS,
                city: 'Tuymen',
                username: 'Coder',
                avatar: 'https://avatars.mds.yandex.net/i?id=b2a8579e7806b8e45105c7c072ec35dab25a20e2-8297859-images-thumbs&n=13',
            },
        },
    })];
export var Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({
        profile: {
            form: {
                first: 'Eugene',
                lastname: 'Khoroshev',
                age: 27,
                currency: CurrencyEnum.RUB,
                country: Countries.RUS,
                city: 'Tuymen',
                username: 'Coder',
                avatar: 'https://avatars.mds.yandex.net/i?id=b2a8579e7806b8e45105c7c072ec35dab25a20e2-8297859-images-thumbs&n=13',
            },
        },
    })];
