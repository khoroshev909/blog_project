import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/BugButton';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebatItem/SidebarItem';
import { itemsConfig } from '../../model/itemsConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <BugButton />
                {itemsConfig.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
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
});
