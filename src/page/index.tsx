import {useRef} from 'react';

import {useElement} from '~/utils/useElement';

import {useRootSize} from './utils/useRootSize';
import {useWindowsControls} from './utils/useWindowsControls';
import {Footer} from './components/Footer';
import * as applications from './applications';
import css from './style.m.css';

export const Page = () => {
    const ref = useRef<HTMLDivElement>(null);
    const root = useElement(ref);
    useRootSize(root);
    useWindowsControls();

    return (
        <div className={css.root}>
            <main className={css.main} ref={ref}>
                <div className={css.grid}>
                    {root && Object.entries(applications).map(
                        ([key, Component]) => <Component key={key} root={root} />,
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};
