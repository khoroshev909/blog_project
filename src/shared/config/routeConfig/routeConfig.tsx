import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '/not-found',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: '*',
    },
};
