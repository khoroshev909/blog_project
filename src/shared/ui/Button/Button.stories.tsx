import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEMES } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});

Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_M,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Text',
    size: ButtonSize.SIZE_M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Text',
    size: ButtonSize.SIZE_L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Text',
    size: ButtonSize.SIZE_XL,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_XL,
};
