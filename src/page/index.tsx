import {useState} from 'react';
import {useSelector} from 'react-redux';

import {useRootSize} from './utils/useRootSize';
import {useWindowsControls} from './utils/useWindowsControls';
import {Footer} from './components/Footer';
import {Clippy} from './applications/clippy';
import {RootContext} from './RootContext';
import css from './style.m.css';
import {Grid} from './components/Grid';
import {selectIsClippyVisible} from './state/clippy';

export const Page = () => {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    // Subscribe to root size
    useRootSize(root);
    // Provides windows keyboard control
    useWindowsControls();

    const showClippy = useSelector(selectIsClippyVisible);

    return (
        <RootContext.Provider value={root}>
            <div className={css.root}>
                <main className={css.main} ref={setRoot}>
                    <Grid />

                    {showClippy ? (
                        <Clippy className={css.clippy} />
                    ) : null}
                </main>
                <Footer />
            </div>
        </RootContext.Provider>
    );
};
