import {useState} from 'react';

import {Loader as LoaderBase} from '~/components/Loader';
import {useInterval} from '~/utils/useInterval';

export const Loader = () => {
    const [progress, setProgress] = useState(0);

    useInterval(
        () => setProgress(value => value + 10),
        progress === 100 ? null : 50,
    );

    return (
        <>
            Loading...
            <LoaderBase progress={progress} />
        </>
    );
};
