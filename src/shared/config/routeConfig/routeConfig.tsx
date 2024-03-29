import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRoureProps = RouteProps & {
    needAuth?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLE_LIST = 'article_list',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_CREATE = 'article_create',

    // not found
    NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLE_LIST]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_EDIT]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.NOT_FOUND]: '/not-found',
    [AppRoutes.PROFILE]: '/profile/',
};

export const routeConfig: Record<AppRoutes, AppRoureProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.ARTICLE_LIST]: {
        element: <ArticleListPage />,
        path: RoutePath[AppRoutes.ARTICLE_LIST],
        needAuth: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        element: <ArticleEditPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id/edit`,
        needAuth: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        element: <ArticleDetailsPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
        needAuth: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        element: <ArticleEditPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}create`,
        needAuth: true,
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        needAuth: true,
    },
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: '*',
    },
};
