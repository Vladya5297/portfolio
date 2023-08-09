import {useEffect} from 'react';

import {useSetup} from '~/page/components/Application';
import {WindowContent, lazyContent} from '~/page/components/WindowContent';
import {windowsActions, type WindowId} from '~/page/state/windows';
import {Window} from '~/page/components/Window';
import {useAction} from '~/utils/redux/useAction';

import type {ApplicationProps} from '../types';

import logo from './assets/intro-logo.png';

const id = 'intro' as WindowId;
const title = 'Introduction';
const image = logo.src;
const Content = lazyContent(() => import('./Content'));

const height = 370;
const width = 480;

export const Intro = ({root}: ApplicationProps) => {
    const rect = root.getBoundingClientRect();
    const ready = useSetup({
        id,
        title,
        image,
        root,
        defaultSize: {height, width},
        defaultPosition: {
            x: rect.width / 2 - width / 2,
            y: rect.height / 2 - height / 2,
        },
    });

    const open = useAction(() => windowsActions.open(id));

    useEffect(() => {
        const shown = window.localStorage.getItem('intro');
        if (shown) return;

        open();
        window.localStorage.setItem('intro', 'true');
    }, []);

    return ready ? (
        <Window
            id={id}
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
