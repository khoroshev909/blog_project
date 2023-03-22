import { useEffect } from 'react';

export default function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
