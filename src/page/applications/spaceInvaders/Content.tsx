import type {MutableRefObject} from 'react';
import {useCallback, useEffect, useRef} from 'react';

import {resetFocus} from '~/utils/dom';
import {useClickOutside} from '~/utils/useClickOutside';

import {Game} from './game';
import css from './style.m.css';

const Content = () => {
    const root = useRef<HTMLDivElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const game = useRef() as MutableRefObject<Game>;

    useEffect(() => {
        if (!canvas.current) return;

        resetFocus();
        game.current = new Game(canvas.current);
        game.current.init();

        return () => {
            game.current.unmount();
        };
    }, []);

    const pause = useCallback(() => game.current.pause(), []);
    useClickOutside(root, pause);

    // Capture focus
    const onClick = () => {
        root.current?.focus();
    };

    return (
        <div className={css.root} ref={root}>
            <canvas
                ref={canvas}
                width={400}
                height={700}
                className={css.canvas}
                tabIndex={0}
                onClick={onClick}
            />
        </div>
    );
};

export default Content;
