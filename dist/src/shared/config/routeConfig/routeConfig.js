var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleListPage } from 'pages/ArticleListPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLE_LIST"] = "article_list";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    // not found
    AppRoutes["NOT_FOUND"] = "not-found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.ARTICLE_LIST] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    _a[AppRoutes.NOT_FOUND] = '/not-found',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        element: _jsx(MainPage, {}, void 0),
        path: RoutePath[AppRoutes.MAIN],
    },
    _b[AppRoutes.ABOUT] = {
        element: _jsx(AboutPage, {}, void 0),
        path: RoutePath[AppRoutes.ABOUT],
    },
    _b[AppRoutes.ARTICLE_LIST] = {
        element: _jsx(ArticleListPage, {}, void 0),
        path: RoutePath[AppRoutes.ARTICLE_LIST],
        needAuth: true,
    },
    _b[AppRoutes.ARTICLE_DETAILS] = {
        element: _jsx(ArticleDetailsPage, {}, void 0),
        path: "".concat(RoutePath[AppRoutes.ARTICLE_DETAILS], ":id"),
        needAuth: true,
    },
    _b[AppRoutes.PROFILE] = {
        element: _jsx(ProfilePage, {}, void 0),
        path: "".concat(RoutePath[AppRoutes.PROFILE], ":id"),
        needAuth: true,
    },
    _b[AppRoutes.NOT_FOUND] = {
        element: _jsx(NotFoundPage, {}, void 0),
        path: '*',
    },
    _b);
