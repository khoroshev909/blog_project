import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton
}
export const Button = ({
    className, children, theme, ...rest
}: ButtonProps) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        {...rest}
    >
        {children}
    </button>
);
