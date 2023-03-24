import { useCallback, useMemo, useState } from 'react';

interface bindHover {
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

type useHoverProps = { isHover: boolean, bindHover: bindHover }

export function useHover() {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo<useHoverProps>(() => ({
        isHover,
        bindHover: {
            onMouseEnter,
            onMouseLeave,
        },
    }), [isHover, onMouseEnter, onMouseLeave]);
}
