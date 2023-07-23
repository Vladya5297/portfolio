import type {Module} from '../game/types';
import {getBounds} from '../utils/getBounds';

export const checkCollision: Module = (ctx, runtime) => {
    const {bullet, invaders} = runtime;

    if (!bullet) return;

    invaders.list.forEach(invader => {
        const invaderBounds = getBounds(invader);
        const bulletBounds = getBounds(bullet);

        const verticalCollision = bulletBounds.top < invaderBounds.bottom
            && bulletBounds.top > invaderBounds.top;

        const horizontalCollision = bulletBounds.right > invaderBounds.left
            && bulletBounds.right < invaderBounds.right;

        if (verticalCollision && horizontalCollision) {
            runtime.bullet = null;
            invaders.list.delete(invader);

            // Increase speed on each kill
            if (invaders.speedX > 0) {
                invaders.speedX += 0.1;
            }
            if (invaders.speedX < 0) {
                invaders.speedX -= 0.1;
            }
        }
    });
};
