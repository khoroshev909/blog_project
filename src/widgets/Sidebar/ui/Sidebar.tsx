import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useState } from 'react';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/main-page.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    className={cls.item}
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('main')}
                    </span>
                </AppLink>
                <AppLink
                    className={cls.item}
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('about')}
                    </span>
                </AppLink>
            </div>
            <Button
                className={cls.sidebarBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.SIZE_L}
                data-testid="toggle-button"
                onClick={() => setCollapsed((prev) => !prev)}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.sidebarSwitchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
