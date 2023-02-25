import React, { FC, useState, useMemo } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    THEMES,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES || THEMES.LIGHT;

interface ThemeProviderProps {
    initialTheme?: THEMES
}
export const ThemeProvider:FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<THEMES>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
