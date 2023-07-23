import {useEffect, useRef} from 'react';

import {game} from './game';

const Content = () => {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        game(canvas);
    }, []);

    return (
        <canvas ref={ref} width={400} height={600} style={{backgroundColor: 'black'}} />
    );
};

export default Content;
