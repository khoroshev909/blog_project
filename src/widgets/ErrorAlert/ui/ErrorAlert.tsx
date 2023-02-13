import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ErrorAlert.module.scss';

interface ErrorAlertProps {
    className?: string
}
export const ErrorAlert = ({ className }: ErrorAlertProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.ErrorAlert, {}, [className])}>
            <h4>{t('somethingWentWrong')}</h4>
            <Button onClick={reloadPage}>{t('reloadThePage')}</Button>
        </div>
    );
};
