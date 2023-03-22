import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'enteties/Comment',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
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

export const Loading = Template.bind({});
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
