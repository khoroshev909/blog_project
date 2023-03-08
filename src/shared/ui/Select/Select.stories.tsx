import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectComponent = Template.bind({});
SelectComponent.args = {
    label: 'Label',
    value: 'value1',
    options: [
        { value: 'value1', text: 'Value 1' },
        { value: 'value2', text: 'Value 2' },
    ],
};
