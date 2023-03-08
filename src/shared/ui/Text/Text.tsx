import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = '',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextTheme,
    align?: TextAlign
}

export const Text = memo(({
    className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}: TextProps) => (
    <div className={classNames('', {}, [className, cls[theme], cls[align]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
