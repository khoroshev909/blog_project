import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const toggleModal = useCallback(() => setIsAuthModal((prev) => !prev), []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={toggleModal}
                >
                    {t('login')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={toggleModal}>
                {t('lorem')}
            </Modal>
        </div>
    );
};
