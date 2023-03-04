import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
    short: boolean
}
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
        >
            {t(short ? 'shortLang' : 'language')}
        </Button>
    );
});
