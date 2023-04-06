import { useEffect } from 'react';
export default function useInitialEffect(callback) {
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}
