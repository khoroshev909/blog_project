import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from 'enteties/Article';
import { EntetiesView } from './EntetiesView';

export default {
    title: 'features/EntetiesView',
    component: EntetiesView,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EntetiesView>;

const Template: ComponentStory<typeof EntetiesView> = (args) => <EntetiesView {...args} />;

export const List = Template.bind({});
List.args = {
    view: ArticleView.SMALL,
    changeView: () => null,
};

export const Tile = Template.bind({});
Tile.args = {
    view: ArticleView.BIG,
    changeView: () => null,
};
