import React, { useCallback, useState, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User/model/selectors/getUserAuthData';
import { userActions } from 'enteties/User';
import { useNavigate } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const closeModal = useCallback(() => setIsAuthModal(false), []);
    const user = useSelector(getUserAuthData);

    const logoutHandler = () => {
        dispatch(userActions.logout());
        navigate('/');
    };

    if (!user) {
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
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={closeModal}
                    />
                )}
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={() => navigate(routeConfig.article_create.path!)}
                >
                    {t('create')}
                </Button>
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={logoutHandler}
                >
                    {t('logout')}
                </Button>
            </div>
        </div>
    );
});
