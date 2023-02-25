import { ThemeProvider, THEMES } from 'app/providers/ThemeProvider';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: THEMES) => (Story: Story) => (
    <ThemeProvider initialTheme={THEMES.LIGHT}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
