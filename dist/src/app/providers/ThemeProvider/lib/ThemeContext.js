import { createContext } from 'react';
export var THEMES;
(function (THEMES) {
    THEMES["LIGHT"] = "app_light_theme";
    THEMES["DARK"] = "app_dark_theme";
})(THEMES || (THEMES = {}));
export var ThemeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
