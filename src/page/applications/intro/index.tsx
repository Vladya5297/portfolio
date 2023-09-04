import {useEffect} from 'react';

import {useSetup} from '~/page/components/Application';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';
import {windowsActions, type WindowId} from '~/page/state/windows';
import {Window} from '~/page/components/Window';
import {useAction} from '~/utils/redux/useAction';

import type {ApplicationProps} from '../types';

import logo from './assets/intro-logo.png';

export const INTRO_ID = 'intro' as WindowId;

const Content = lazyContent(() => import('./Content'));

export const Intro = ({root}: ApplicationProps) => {
    const ready = useSetup({
        id: INTRO_ID,
        title: 'Introduction',
        image: logo.src,
        root,
        defaultSize: {
            height: 370,
            width: 480,
        },
    });

    const open = useAction(() => windowsActions.open(INTRO_ID));

    useEffect(() => {
        const shown = window.localStorage.getItem('intro');
        if (shown) return;

        open();
        window.localStorage.setItem('intro', 'true');
    }, []);

    return ready ? (
        <Window
            id={INTRO_ID}
            root={root}
            resizeable={false}
            disableFullscreen
            content={(
                <WindowContent>
                    <Content />
                </WindowContent>
            )}
        />
    ) : null;
};
