import type {Module} from '../game/types';
import {getBounds} from '../utils/getBounds';

export const moveInvaders: Module = ({canvas}, {invaders}) => {
    let rowEnd = false;

    invaders.list.forEach(invader => {
        invader.x += invaders.speedX;

        const invaderBounds = getBounds(invader);

        if (invaderBounds.right > canvas.width || invaderBounds.left < 0) {
            rowEnd = true;
        }
    });

    if (rowEnd) {
        invaders.speedX = -invaders.speedX;
        invaders.list.forEach(invader => {
            invader.y += invaders.speedY;
        });
        rowEnd = false;
    }
};
