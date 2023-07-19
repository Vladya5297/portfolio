import {useRef} from 'react';

import {useInitWindow} from './utils';
import {GitHub} from './applications/github';
import * as applications from './applications';
import type {ApplicationProps} from './components/Application';
import {Footer} from './components/Footer';
import {Application} from './components/Application';
import css from './style.m.css';

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
                    <GitHub />
                </div>
            </main>
            <Footer />
        </div>
    );
};
