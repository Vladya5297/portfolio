import type {MutableRefObject} from 'react';
import {useCallback, useEffect, useRef} from 'react';

import {useClickOutside} from '~/utils/useClickOutside';

import css from './style.m.css';
import {SpaceInvaders} from './game';

const Content = () => {
    const root = useRef<HTMLDivElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const game = useRef() as MutableRefObject<SpaceInvaders>;

    useEffect(() => {
        if (!canvas.current) return;

        game.current = new SpaceInvaders(canvas.current);
        game.current.begin();

        return () => {
            game.current.destroy();
        };
    }, []);

    const pause = useCallback(() => game.current.pause(), []);
    useClickOutside(root, pause);

    // Capture focus
    const onClick = () => {
        canvas.current?.focus();
    };

    return (
        <div
            className={css.root}
            ref={root}
            onClick={onClick}
        >
            <canvas
                ref={canvas}
                width={400}
                height={700}
                className={css.canvas}
            />
        </div>
    );
};

export default Content;
