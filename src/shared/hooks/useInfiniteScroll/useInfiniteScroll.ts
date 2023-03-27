import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
    triggerRef: MutableRefObject<HTMLElement>,
    wrapperRef: MutableRefObject<HTMLElement>,
    callback?: () => void,
}

export default function useInfiniteScroll({ triggerRef, wrapperRef, callback }: UseInfiniteScrollProps) {
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const trigger = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapper,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(trigger);
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(trigger);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
