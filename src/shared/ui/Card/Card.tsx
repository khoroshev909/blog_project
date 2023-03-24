import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    children: ReactNode
}

export const Card = ({ className, children, ...rest }: CardProps) => (
    <div className={classNames(cls.Card, {}, [className])} {...rest}>
        {children}
    </div>
);
