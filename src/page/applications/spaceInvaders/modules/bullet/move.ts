import type {RafHandler} from '../../game/types';

export const move: RafHandler = (ctx, runtime) => {
    const {bullet} = runtime;

    if (!bullet) return;

    bullet.move();

    // Remove bullet that is off the canvas
    if (bullet.y < 0) {
        runtime.bullet = null;
    }
};
