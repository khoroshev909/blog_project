import { useCallback, useMemo, useState } from 'react';
export function useHover() {
    var _a = useState(false), isHover = _a[0], setIsHover = _a[1];
    var onMouseEnter = useCallback(function () {
        setIsHover(true);
    }, []);
    var onMouseLeave = useCallback(function () {
        setIsHover(false);
    }, []);
    return useMemo(function () { return ({
        isHover: isHover,
        bindHover: {
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
        },
    }); }, [isHover, onMouseEnter, onMouseLeave]);
}
