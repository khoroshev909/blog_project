import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/types/article';
import { ArticleSkeleton } from './ArticleSkeleton';

export default {
    title: 'enteties/ArticleSkeleton',
    component: ArticleSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSkeleton>;

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton {...args} />;

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
};

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
};

export const SmallDark = Template.bind({});
SmallDark.args = {
    view: ArticleView.SMALL,
};
SmallDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const BigDark = Template.bind({});
BigDark.args = {
    view: ArticleView.BIG,
};
BigDark.decorators = [ThemeDecorator(THEMES.DARK)];
