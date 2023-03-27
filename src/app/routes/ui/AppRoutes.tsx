import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoureProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/routes/ui/RequreAuth';

export const AppRoutes = () => {
    const guardRoutes = useCallback((route: AppRoureProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
                {' '}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.needAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(guardRoutes)}
        </Routes>
    );
};
