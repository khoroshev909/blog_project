import { useEffect } from 'react';
export default function useInfiniteScroll(_a) {
    var triggerRef = _a.triggerRef, wrapperRef = _a.wrapperRef, callback = _a.callback;
    useEffect(function () {
        var wrapper = wrapperRef.current;
        var trigger = triggerRef.current;
        var observer = null;
        if (callback) {
            var options = {
                root: wrapper,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(trigger);
        }
        return function () {
            if (observer) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(trigger);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
