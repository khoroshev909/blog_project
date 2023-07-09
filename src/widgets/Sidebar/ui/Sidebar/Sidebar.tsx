import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';
import { SidebarItem } from '../SidebatItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItems = useSelector(getSidebarItems);
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <VStack
                className={cls.items}
                align="center"
                gap="8"
            >
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
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
