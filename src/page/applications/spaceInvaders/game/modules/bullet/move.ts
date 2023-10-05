import type {RafHandler} from '../../types';

export const move: RafHandler = (ctx, runtime) => {
    const {bullet, score} = runtime;

    if (!bullet) return;

    bullet.move();

    if (bullet.y > 0) return;

    // Remove bullet that is off the canvas
    runtime.bullet = null;

    // Decrease score
    if (score.value >= 10) {
        score.value -= 10;
    } else {
        score.value = 0;
    }
};
