import {useRef} from 'react';

import {Footer} from './components/Footer';
import {Kaspersky} from './applications/Kaspersky';
import {useInitWindow} from './utils';
import css from './style.m.css';

export const Main = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    useInitWindow(rootRef);

    return (
        <div className={css.root}>
            <main className={css.main} ref={rootRef}>
                <div className={css.grid}>
                    <Kaspersky />
                </div>
            </main>
            <Footer />
        </div>
    );
};
