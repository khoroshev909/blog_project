import React, {Suspense} from 'react';
import "./styles/index.scss"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoutes} from "app/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import 'shared/config/i18n/i18n'

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={""}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRoutes/>
                </div>
            </Suspense>
        </div>
    );
};

export default App
