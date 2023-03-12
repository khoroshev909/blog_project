import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'enteties/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
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

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
};
export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
