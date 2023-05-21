import {useEffect, useState} from 'react';

import {Loader as LoaderBase} from '~/components/Loader';

export const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const tid = setInterval(() => {
            setProgress(value => {
                if (value === 100) {
                    clearInterval(tid);
                    return value;
                }

                return value + 10;
            });
        }, 100);
    }, []);

    return (
        <>
            Loading...
            <LoaderBase progress={progress} />
        </>
    );
};
