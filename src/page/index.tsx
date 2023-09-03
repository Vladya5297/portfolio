import {useState} from 'react';
import {useSelector} from 'react-redux';

import {useRootSize} from './utils/useRootSize';
import {useWindowsControls} from './utils/useWindowsControls';
import {selectIsClippyVisible} from './state/clippy';
import {Grid} from './components/Grid';
import {Clippy} from './components/Clippy';
import {Footer} from './components/Footer';
import {RootContext} from './RootContext';
import css from './style.m.css';

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
