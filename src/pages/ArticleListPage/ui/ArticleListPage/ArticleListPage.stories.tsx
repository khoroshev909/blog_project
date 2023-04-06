import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleListPage from './ArticleListPage';

export default {
    title: 'pages/ArticleListPage',
    component: ArticleListPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListPage>;

const Template: ComponentStory<typeof ArticleListPage> = (args) => <ArticleListPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
