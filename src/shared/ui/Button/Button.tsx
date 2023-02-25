import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum ButtonSize {
    SIZE_M = 'size-m',
    SIZE_L = 'size-l',
    SIZE_XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ButtonTheme,
    square?: boolean,
    size?: string
}
export const Button = ({
    className, children, theme, square, size = ButtonSize.SIZE_M, ...rest
}: ButtonProps) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...rest}
        >
            {children}
        </button>
    );
};
