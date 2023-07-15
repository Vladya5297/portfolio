import {useState} from 'react';

import {Loader as LoaderBase} from '~/components/Loader';
import {useInterval} from '~/utils/useInterval';

import css from './style.m.css';

export const Loader = () => {
    const [progress, setProgress] = useState(0);

    useInterval(
        () => setProgress(value => value + 10),
        progress === 100 ? null : 50,
    );

    return (
        <div className={css.loader}>
            Loading...
            <LoaderBase progress={progress} />
        </div>
    );
};
