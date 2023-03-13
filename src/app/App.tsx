import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRoutes } from 'app/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthMounted, userActions } from 'enteties/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const isMounted = useSelector(getAuthMounted);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isMounted && <AppRoutes />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
