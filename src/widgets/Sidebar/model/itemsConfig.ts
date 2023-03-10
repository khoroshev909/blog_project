import React from 'react';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import ProfileIcon from 'shared/assets/icons/profile-page.svg';
import ArticlesListIcon from 'shared/assets/icons/two_squares.svg';

export interface SidebarItemType {
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    path: string
    needAuth?: boolean
}

export const itemsConfig: SidebarItemType[] = [
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
    {
        text: 'articleList',
        Icon: ArticlesListIcon,
        path: RoutePath[AppRoutes.ARTICLE_LIST],
        needAuth: true,
    },
    {
        text: 'profile',
        Icon: ProfileIcon,
        path: RoutePath[AppRoutes.PROFILE],
        needAuth: true,
    },
];
