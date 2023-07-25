import type {RafHandler} from '../../game/types';

export const move: RafHandler = ({canvas}, {invaders}) => {
    let rowEnd = false;

    invaders.forEach(invader => {
        invader.moveX();

        const invaderBounds = invader.bounds;
        if (invaderBounds.right > canvas.width || invaderBounds.left < 0) {
            rowEnd = true;
        }
    });

    if (rowEnd) {
        invaders.forEach(invader => {
            invader.toggleMoveDirection();
            invader.moveY();
        });
    }
};
