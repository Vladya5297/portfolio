import type {Invader} from '../../entities/invader';
import type {RafHandler} from '../../game/types';

const speedUp = (invaders: Set<Invader>) => {
    invaders.forEach(invader => invader.speedUp(0.1));
};

export const checkCollision: RafHandler = (ctx, runtime) => {
    const {bullet, invaders} = runtime;

    if (!bullet) return;

    invaders.forEach(invader => {
        const invaderBounds = invader.bounds;
        const bulletBounds = bullet.bounds;

        const verticalCollision = bulletBounds.top < invaderBounds.bottom
            && bulletBounds.top > invaderBounds.top;

        const horizontalCollision = bulletBounds.right > invaderBounds.left
            && bulletBounds.right < invaderBounds.right;

        if (verticalCollision && horizontalCollision) {
            runtime.bullet = null;
            invaders.delete(invader);

            // Increase speed on each kill
            speedUp(invaders);
        }
    });
};
