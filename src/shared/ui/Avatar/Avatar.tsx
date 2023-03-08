import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    alt?: string
    src: string,
    size: number,
}
export const Avatar = ({
    className, src, size, alt = 'avatar',
}: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        height: size,
        width: size,
    }), [size]);
    return (
        <img
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
            style={styles}
            src={src}
        />
    );
};
