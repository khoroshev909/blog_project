import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from '../Text/Text';
import cls from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = memo(({ className }: ErrorProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className, cls.error])}>
            <Text
                title={t('Oops... Sometning went wrong')}
                text={t('Try to reload the page')}
                align={TextAlign.CENTER}
            />
        </div>
    );
});
