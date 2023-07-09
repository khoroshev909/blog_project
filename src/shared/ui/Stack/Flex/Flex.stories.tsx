import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from '../Flex/Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
    children: (
        <>
            <div>row</div>
            <div>row</div>
            <div>row</div>
            <div>row</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>column</div>
            <div>column</div>
            <div>column</div>
            <div>column</div>
        </>
    ),
};

export const JustifyStart = Template.bind({});
JustifyStart.args = {
    justify: 'start',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
    justify: 'end',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    justify: 'center',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
    justify: 'between',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const AlignStart = Template.bind({});
AlignStart.args = {
    direction: 'column',
    align: 'start',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
    direction: 'column',
    align: 'end',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    direction: 'column',
    align: 'center',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const Gap4 = Template.bind({});
Gap4.args = {
    gap: '4',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const Gap8 = Template.bind({});
Gap8.args = {
    gap: '8',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const Gap16 = Template.bind({});
Gap16.args = {
    gap: '16',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};

export const Gap32 = Template.bind({});
Gap32.args = {
    gap: '32',
    children: (
        <>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
            <div>elem</div>
        </>
    ),
};