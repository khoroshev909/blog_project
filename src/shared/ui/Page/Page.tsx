import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, useRef,
} from 'react';
import useInfiniteScroll from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void
}

export const Page = ({ className, onScrollEnd, children }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
