import {useState} from 'react';

import {useSetRoot} from '~/page/RootContext';

import {Clippy} from '../Clippy';
import {Footer} from '../Footer';
import {Grid} from '../Grid';

import css from './style.m.css';
import {useRootSize} from './utils/useRootSize';

export const Content = () => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    useSetRoot(root, [root]);
    // Subscribe to root size
    useRootSize(root);

    return (
        <div className={css.root}>
            <main className={css.main} ref={setRoot}>
                <Grid />
                <Clippy className={css.clippy} />
            </main>

            <Footer />
        </div>
    );
};
