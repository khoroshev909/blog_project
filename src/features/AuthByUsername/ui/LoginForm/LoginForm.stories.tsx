import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StateDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
Form.args = {};
Form.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ loginForm: { username: 'admin', password: '123' } }), ThemeDecorator(THEMES.DARK)];

export const Loading = Template.bind({});
Form.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { loading: true } })];

export const Error = Template.bind({});
Form.args = {};
Error.decorators = [StoreDecorator({ loginForm: { error: 'error' } })];
