import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'enteties/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
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

export const Loading = Template.bind({});
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
