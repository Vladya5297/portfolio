import {useEffect} from 'react';

export const useInterval = (fn: () => void, interval: number | null): void => {
    useEffect(() => {
        if (interval === null) return;

        const tid = setInterval(fn, interval);

        return () => clearInterval(tid);
    }, [interval]);
};
