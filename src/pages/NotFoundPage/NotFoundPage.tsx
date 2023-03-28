import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage:FC<NotFoundPageProps> = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <h4>{t('notFound')}</h4>
        </Page>
    );
});
