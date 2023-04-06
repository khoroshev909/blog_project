import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { ArticleDetailsHeader } from './ArticleDetailsHeader';

export default {
    title: 'enteties/ArticleDetailsHeader',
    component: ArticleDetailsHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => <ArticleDetailsHeader {...args} />;

export const WithEdit = Template.bind({});
WithEdit.args = {};
WithEdit.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
    articleDetails: {
        data: {
            user: {
                id: '1',
            },
        },
    },
})];

export const WithoutEdit = Template.bind({});
WithoutEdit.args = {};
WithoutEdit.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
        },
    },
    articleDetails: {
        data: {
            user: {
                id: '2',
            },
        },
    },
}), ThemeDecorator(THEMES.DARK)];
