import type {RafHandler} from '../../game/types';

export const move: RafHandler = ({canvas}, {invaders, score}) => {
    let rowEnd = false;

    invaders.forEach(invader => {
        invader.moveX();

        const invaderBounds = invader.bounds;
        if (invaderBounds.right > canvas.width || invaderBounds.left < 0) {
            rowEnd = true;
        }
    });

    if (!rowEnd) return;

    invaders.forEach(invader => {
        invader.toggleMoveDirection();
        invader.moveY();
    });

    // Decrease score
    if (score.value > 0) {
        score.value -= 1;
    }
};
