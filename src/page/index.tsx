import {useRef} from 'react';

import {Footer} from './components/Footer';
import * as applications from './applications';
import {useInitWindow} from './utils';
import css from './style.m.css';
import type {ApplicationProps} from './components/Application';
import {Application} from './components/Application';

export const Main = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    useInitWindow(rootRef);

    return (
        <div className={css.root}>
            <main className={css.main} ref={rootRef}>
                <div className={css.grid}>
                    {Object.values(applications).map((props: ApplicationProps) => (
                        <Application key={props.id} {...props} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
