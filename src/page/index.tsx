import {useState} from 'react';

import {useRootSize} from './utils/useRootSize';
import {Grid} from './components/Grid';
import {Clippy} from './components/Clippy';
import {Footer} from './components/Footer';
import {RootContext} from './RootContext';
import css from './style.m.css';

export const Page = () => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    // Subscribe to root size
    useRootSize(root);

    return (
        <RootContext.Provider value={root}>
            <div className={css.root}>
                <main className={css.main} ref={setRoot}>
                    <Grid />
                    <Clippy className={css.clippy} />
                </main>
                <Footer />
            </div>
        </RootContext.Provider>
    );
};
