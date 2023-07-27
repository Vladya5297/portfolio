import {invaders} from '../../modules/invaders';
import {player} from '../../modules/player';
import {bullet} from '../../modules/bullet';
import type {Context, Runtime} from '../types';
import {end} from '../end';
import {score} from '../../modules/score';
import {controls} from '../../modules/controls';

const modules = [
    invaders,
    player,
    bullet,
    score,
    controls,
];

export const run = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d')!;
    const ctx: Context = {context, canvas};

    const runtime = {
        invaders: new Set(),
        bullet: null,
        player: {},
        controls: {},
        score: {},
    } as Runtime;

    const unload = modules.map(({setup}) => setup?.(ctx, runtime));

    const draw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        modules.forEach(({raf}) => {
            raf.forEach(handler => handler(ctx, runtime));
        });

        if (runtime.gameover) {
            unload.forEach(cb => cb?.());
            return end(canvas, runtime.score.value);
        }

        requestAnimationFrame(draw);
    };

    draw();
};
