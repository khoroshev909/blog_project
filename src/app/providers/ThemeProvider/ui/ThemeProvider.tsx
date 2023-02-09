import React, {FC, useState, useMemo} from 'react';
import {LOCAL_STORAGE_THEME_KEY, THEMES, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEMES || THEMES.LIGHT
export const ThemeProvider:FC = ({children}) => {

    const [theme, setTheme] = useState<THEMES>(defaultTheme)

    const defaultProps = useMemo(() => ({theme, setTheme}), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
};
