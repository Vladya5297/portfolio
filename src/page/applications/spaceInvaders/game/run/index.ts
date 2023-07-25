import {invaders} from '../../modules/invaders';
import {player} from '../../modules/player';
import {bullet} from '../../modules/bullet';
import type {Context, Runtime} from '../types';
import {end} from '../end';

export const run = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d')!;
    const ctx: Context = {context, canvas};

    const runtime = {
        invaders: new Set(),
        bullet: null,
        player: {},
        controls: {},
    } as Runtime;

    const unloadInvaders = invaders.setup(ctx, runtime);
    const unloadPlayer = player.setup(ctx, runtime);
    const unloadBullet = bullet.setup(ctx, runtime);

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        invaders.raf.forEach(handler => handler(ctx, runtime));
        player.raf.forEach(handler => handler(ctx, runtime));
        bullet.raf.forEach(handler => handler(ctx, runtime));

        if (runtime.gameover) {
            unloadInvaders();
            unloadPlayer();
            unloadBullet();
            return end(canvas, runtime.score);
        }

        requestAnimationFrame(draw);
    };

    draw();
};
