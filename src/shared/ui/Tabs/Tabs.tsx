import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTypes } from 'enteties/Article';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: ArticleTypes,
    text: string
}
export interface TabsProps {
    className?: string,
    tabs: TabItem[],
    value: ArticleTypes,
    onChangeTab?: (val: ArticleTypes) => void,
}

export const Tabs = memo(({
    className, tabs, value, onChangeTab,
}: TabsProps) => (
    <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
            <Card
                key={tab.value}
                className={cls.tab}
                theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
                onClick={() => onChangeTab?.(tab.value)}
            >
                {tab.text}
            </Card>
        ))}
    </div>
));
