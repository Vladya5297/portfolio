import {useEffect} from 'react';

export const useInterval = (callback: () => void, interval: number | null): void => {
    useEffect(() => {
        if (interval === null) return;

        const tid = setInterval(callback, interval);

        return () => clearInterval(tid);
    }, [callback, interval]);
};
