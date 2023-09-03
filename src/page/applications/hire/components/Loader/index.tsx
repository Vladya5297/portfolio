import {useCallback, useState} from 'react';

import {random} from '~/utils/random';
import {useInterval} from '~/utils/useInterval';
import {Loader as LoaderBase} from '~/components/Loader';

import css from './style.m.css';

export const Loader = () => {
    const [progress, setProgress] = useState(0);

    const update = useCallback(() => {
        const delta = random.int({min: 5, max: 10});
        setProgress(value => {
            const result = value + delta;
            return result > 100 ? 100 : result;
        });
    }, []);

    useInterval(update, progress === 100 ? null : 200);

    return (
        <div className={css.loader}>
            Loading...
            <LoaderBase progress={progress} />
        </div>
    );
};
