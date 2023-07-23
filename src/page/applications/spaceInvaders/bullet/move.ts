import type {Module} from '../game/types';

export const move: Module = (ctx, runtime) => {
    const {bullet} = runtime;

    if (!bullet) return;

    bullet.y -= bullet.speed;

    // Remove bullet that is off the canvas
    if (bullet.y < 0) {
        runtime.bullet = null;
    }
};
