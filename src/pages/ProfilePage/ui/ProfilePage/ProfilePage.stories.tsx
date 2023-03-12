import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
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

export const Dark = Template.bind({});
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
