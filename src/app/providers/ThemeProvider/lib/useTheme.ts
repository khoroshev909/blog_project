import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: THEMES;
}
export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
