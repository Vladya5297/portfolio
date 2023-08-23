import {useRef} from 'react';

import {useElement} from '~/utils/useElement';

import {useRootSize} from './utils/useRootSize';
import {useWindowsControls} from './utils/useWindowsControls';
import {Footer} from './components/Footer';
import {applications} from './applications';
import css from './style.m.css';

export const Page = () => {
    const ref = useRef<HTMLDivElement>(null);
    const root = useElement(ref);
    // Subscribe to root size
    useRootSize(ref);
    // Provides windows keyboard control
    useWindowsControls();

    return (
        <div className={css.root}>
            <main className={css.main} ref={ref}>
                <div className={css.grid}>
                    {root && applications.map(
                        Component => <Component key={Component.name} root={root} />,
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};
