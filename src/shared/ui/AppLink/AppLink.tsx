import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}
interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}
export const AppLink:FC<AppLinkProps> = memo(({
    className, children, to, theme = AppLinkTheme.PRIMARY, ...rest
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...rest}
    >
        {children}
    </Link>
));
