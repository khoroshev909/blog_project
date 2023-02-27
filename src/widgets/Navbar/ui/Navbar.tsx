import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const closeModal = useCallback(() => setIsAuthModal(false), []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={() => setIsAuthModal(true)}
                >
                    {t('login')}
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={closeModal}
            />
        </div>
    );
};
