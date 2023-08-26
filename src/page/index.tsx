import {useState} from 'react';

import {useRootSize} from './utils/useRootSize';
import {useWindowsControls} from './utils/useWindowsControls';
import {Footer} from './components/Footer';
import {applications} from './applications';
import {Clippy} from './applications/clippy';
import css from './style.m.css';

export const Page = () => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    // Subscribe to root size
    useRootSize(root);
    // Provides windows keyboard control
    useWindowsControls();

    return (
        <div className={css.root}>
            <main className={css.main} ref={setRoot}>
                <div className={css.grid}>
                    {root && applications.map(
                        Component => <Component key={Component.name} root={root} />,
                    )}

                    <Clippy className={css.clippy} />
                </div>
            </main>
            <Footer />
        </div>
    );
};
