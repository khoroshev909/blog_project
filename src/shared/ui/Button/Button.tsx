import React, { memo, ButtonHTMLAttributes } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
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
    size?: string,
}
export const Button = memo(({
    className,
    children,
    theme,
    disabled,
    square,
    size = ButtonSize.SIZE_M, ...rest
}: ButtonProps) => {
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, (theme && cls[theme]), cls[size]])}
            {...rest}
        >
            {children}
        </button>
    );
});
