import type {RafHandler} from '../../types';

export const checkCollision: RafHandler = (ctx, runtime) => {
    const {invaders, player} = runtime;

    let gameover = false;

    invaders.forEach(invader => {
        if (invader.bounds.bottom >= player.bounds.top) {
            gameover = true;
        }
    });

    if (gameover) {
        runtime.score.value = 0;
        runtime.gameover = true;
    }
};
