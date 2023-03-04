import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = '',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    text?: string,
    title?: string,
    theme?: TextTheme
}

export const Text = memo(({
    className, text, title, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames('', {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
