import {useEffect, useState} from 'react';

import {windowsRootAtom} from '~/constants/atoms';

import {Clippy} from '../Clippy';
import {Footer} from '../Footer';
import {Grid} from '../Grid';

import {useRootSize} from './utils/useRootSize';
import css from './style.m.css';

export const Content = () => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    useRootSize(root);

    useEffect(() => {
        windowsRootAtom.setValue(root);
    }, [root]);

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
