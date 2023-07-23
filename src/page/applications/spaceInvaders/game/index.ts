import {invaders} from '../invaders';
import {player} from '../player';
import {bullet} from '../bullet';

import type {Context, Runtime} from './types';

export const game = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d')!;
    const ctx: Context = {context, canvas};

    const initialRuntime: Partial<Runtime> = {};

    invaders.setup(ctx, initialRuntime);
    player.setup(ctx, initialRuntime);
    bullet.setup(ctx, initialRuntime);

    const runtime = initialRuntime as Runtime;

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        invaders.raf.forEach(module => module(ctx, runtime));
        player.raf.forEach(module => module(ctx, runtime));
        bullet.raf.forEach(module => module(ctx, runtime));

        requestAnimationFrame(draw);
    };

    draw();
};
