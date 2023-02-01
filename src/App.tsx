import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss"
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {useTheme} from "./themes/useTheme";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {selected: true, focused: true, red: false}, [theme])}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy/>}></Route>
                    <Route path="/about" element={<AboutPageLazy/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
