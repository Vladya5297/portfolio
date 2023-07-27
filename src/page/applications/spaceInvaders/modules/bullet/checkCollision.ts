import type {Invader} from '../../entities/invader';
import type {RafHandler} from '../../game/types';

const speedUp = (invaders: Set<Invader>) => {
    invaders.forEach(invader => invader.speedUp(0.1));
};

export const checkCollision: RafHandler = (ctx, runtime) => {
    const {bullet, invaders} = runtime;

    if (!bullet) return;

    invaders.forEach(invader => {
        if (!invader.collides(bullet)) return;

        // Remove bullet and invader
        runtime.bullet = null;
        invaders.delete(invader);

        // Increase score
        runtime.score.value += 10;

        // Increase speed
        speedUp(invaders);

        // Check game over
        if (invaders.size === 0) {
            runtime.score.value += 100;
            runtime.gameover = true;
        }
    });
};
