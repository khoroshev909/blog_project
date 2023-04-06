import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import useInfiniteScroll from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import useInitialEffect from 'shared/hooks/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle';
import { scrollActions } from './ScrollSave/model/slice/scrollSlice';
import { getScrollPagePosition } from './ScrollSave/model/selectors/scrollSaveSelectors';
import cls from './Page.module.scss';

interface PageProps {
    className?: string,
    children: ReactNode,
    onScrollEnd?: () => void,
    listenScroll?: boolean
}

export const Page = ({
    className, onScrollEnd, children, listenScroll = false,
}: PageProps) => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollPosition = useSelector((state: StateSchema) => getScrollPagePosition(state, pathname));

    useInitialEffect(() => {
        if (listenScroll) {
            wrapperRef.current.scrollTop = scrollPosition;
        }
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(scrollActions.setScrollPosition({
            pageUrl: pathname,
            scrollTop: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            onScroll={listenScroll ? onScroll : undefined}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
        </section>
    );
};
