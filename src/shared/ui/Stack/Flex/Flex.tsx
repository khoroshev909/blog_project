import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

export const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
};

export const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

export const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

export const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps {
    className?: string,
    children: ReactNode,
    justify?: FlexJustify,
    align?: FlexAlign,
    direction?: FlexDirection,
    gap?: FlexGap,
    max?: boolean
}

export const Flex = ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max = true,
}: FlexProps) => {
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    const mods: Mods = { max: cls.max };
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};
