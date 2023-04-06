import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'enteties/User';
import MainIcon from 'shared/assets/icons/main-page.svg';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ArticlesListIcon from 'shared/assets/icons/two_squares.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
export var getSidebarItems = createSelector(getUserAuthData, function (authData) {
    var itemsConfig = [
        {
            text: 'main',
            Icon: MainIcon,
            path: RoutePath[AppRoutes.MAIN],
        },
        {
            text: 'about',
            Icon: AboutIcon,
            path: RoutePath[AppRoutes.ABOUT],
        },
    ];
    if (authData) {
        itemsConfig.push({
            text: 'articleList',
            Icon: ArticlesListIcon,
            path: RoutePath[AppRoutes.ARTICLE_LIST],
            needAuth: true,
        }, {
            text: 'profile',
            Icon: ProfileIcon,
            path: (authData === null || authData === void 0 ? void 0 : authData.id) ? RoutePath[AppRoutes.PROFILE] + authData.id : '/',
            needAuth: true,
        });
    }
    return itemsConfig;
});
