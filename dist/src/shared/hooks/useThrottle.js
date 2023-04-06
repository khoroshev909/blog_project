import { useCallback, useRef } from 'react';
export function useThrottle(callback, delay) {
    var delayFlag = useRef(true);
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (delayFlag.current) {
            callback.apply(void 0, args);
            delayFlag.current = false;
            setTimeout(function () {
                delayFlag.current = true;
            }, delay);
        }
    }, [callback, delay]);
}
