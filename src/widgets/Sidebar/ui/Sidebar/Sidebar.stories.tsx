import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarLight = Template.bind({});
SidebarLight.args = {};
SidebarLight.decorators = [StoreDecorator({})];
export const SidebarDark = Template.bind({});
SidebarDark.args = {};
SidebarDark.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({})];

export const Logged = Template.bind({});
Logged.args = {};
Logged.decorators = [ThemeDecorator(THEMES.DARK), StoreDecorator({ user: { authData: {} } })];
