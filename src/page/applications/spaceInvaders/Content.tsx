import {useEffect, useRef} from 'react';

import {Game} from './game';
import css from './style.m.css';

const Content = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const game = new Game(canvas);
        game.init();

        return () => {
            game.clear();
        };
    }, []);

    return (
        <div className={css.root}>
            <canvas ref={ref} width={400} height={700} className={css.canvas} />
        </div>
    );
};

export default Content;
