import {useCallback, useState} from 'react';

import {Loader as LoaderBase} from '~/components/Loader';
import {useInterval} from '~/utils/useInterval';

import css from './style.m.css';

export const Loader = () => {
    const [progress, setProgress] = useState(0);

    const update = useCallback(() => setProgress(value => value + 10), []);
    useInterval(update, progress === 100 ? null : 50);

    return (
        <div className={css.loader}>
            Loading...
            <LoaderBase progress={progress} />
        </div>
    );
};
