import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRoutes = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                />
            ))}
        </Routes>
    </Suspense>
);
