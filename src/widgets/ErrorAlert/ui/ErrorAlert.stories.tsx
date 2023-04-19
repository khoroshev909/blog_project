import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorAlert } from '../ui/ErrorAlert';

export default {
    title: 'widgets/ErrorAlert',
    component: ErrorAlert,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorAlert>;

const Template: ComponentStory<typeof ErrorAlert> = (args) => <ErrorAlert {...args} />;

export const Alert = Template.bind({});
Alert.args = {};
