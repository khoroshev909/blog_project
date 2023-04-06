import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, THEMES, } from 'app/providers/ThemeProvider/lib/ThemeContext';
export var useTheme = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || THEMES.LIGHT,
        toggleTheme: toggleTheme,
    };
};
