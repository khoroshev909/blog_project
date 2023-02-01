import React from 'react';
import {useTheme} from "../../themes/useTheme";
const MainPage = () => {

    const {toggleTheme} = useTheme()

    return (
        <div>
            <p>Main Page</p>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};

export default MainPage
