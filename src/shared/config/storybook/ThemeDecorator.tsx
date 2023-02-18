import { THEMES } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: THEMES) => (Story: Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
