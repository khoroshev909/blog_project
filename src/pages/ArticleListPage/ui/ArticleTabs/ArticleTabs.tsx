import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleTypes } from 'enteties/Article';
import cls from './ArticleTabs.module.scss';

interface ArticleTabsProps {
    className?: string,
    value: ArticleTypes,
    onChangeTab: (val: ArticleTypes) => void,
}
export const ArticleTabs = memo(({ className, value, onChangeTab }: ArticleTabsProps) => {
    const { t } = useTranslation();
    const tabs = useMemo(() => [
        {
            value: ArticleTypes.ALL,
            text: t('allTypes'),
        },
        {
            value: ArticleTypes.IT,
            text: t('it'),
        },
        {
            value: ArticleTypes.SCIENCE,
            text: t('science'),
        },
        {
            value: ArticleTypes.ECONOMICS,
            text: t('economics'),
        },
    ], [t]);
    return (
        <div className={classNames(cls.ArticleTabs, {}, [className])}>
            <Tabs
                tabs={tabs}
                value={value}
                onChangeTab={onChangeTab}
            />
        </div>
    );
});
