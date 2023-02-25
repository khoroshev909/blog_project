import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    isOpen: true,
    onClose: () => {},
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    isOpen: true,
    onClose: () => {},
};
ModalDark.decorators = [ThemeDecorator(THEMES.DARK)];
