import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const delayFlag = useRef<boolean>(true);
    return useCallback((...args: any[]) => {
        if (delayFlag.current) {
            callback(...args);
            delayFlag.current = false;

            setTimeout(() => {
                delayFlag.current = true;
            }, delay);
        }
    }, [callback, delay]);
}
