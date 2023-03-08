import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from 'widgets/Sidebar/model/itemsConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User/model/selectors/getUserAuthData';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string,
    item: SidebarItemType,
    collapsed: boolean
}
export const SidebarItem = (props: SidebarItemProps) => {
    const { t } = useTranslation();
    const isLogged = useSelector(getUserAuthData);
    const {
        item, collapsed, className,
    } = props;
    const { Icon, path, text } = item;
    const mods = { [cls.collapsed]: collapsed };

    if (item.needAuth && !isLogged) {
        return null;
    }

    return (
        <AppLink
            className={classNames(cls.item, mods, [className])}
            to={path}
            theme={AppLinkTheme.SECONDARY}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>
                {t(text)}
            </span>
        </AppLink>
    );
};
