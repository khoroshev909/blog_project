import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTypes } from 'enteties/Article';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabs = [
    {
        value: ArticleTypes.ALL,
        text: 'Все',
    },
    {
        value: ArticleTypes.IT,
        text: 'ИТ',
    },
    {
        value: ArticleTypes.SCIENCE,
        text: 'Наука',
    },
    {
        value: ArticleTypes.ECONOMICS,
        text: 'Экономика',
    },
];
export const Primary = Template.bind({});
Primary.args = {
    tabs,
    value: ArticleTypes.IT,
};

export const Dark = Template.bind({});
Dark.args = {
    tabs,
    value: ArticleTypes.IT,
};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
