import cls from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={() => setCollapsed((prev) => !prev)}>Toggle</Button>
            <div className={cls.sidebarSwitchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};