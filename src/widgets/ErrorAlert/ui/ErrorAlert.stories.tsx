import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { ErrorAlert } from 'widgets/ErrorAlert';

export default {
    title: 'widgets/ErrorAlert',
    component: ErrorAlert,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorAlert>;

const Template: ComponentStory<typeof ErrorAlert> = (args) => <ErrorAlert {...args} />;

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
