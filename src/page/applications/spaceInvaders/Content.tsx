import {useEffect, useRef} from 'react';

import css from './style.m.css';
import {start} from './game/start';

const Content = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        start(canvas);
    }, []);

    return (
        <div className={css.root}>
            <canvas ref={ref} width={400} height={600} className={css.canvas} />
        </div>
    );
};

export default Content;
