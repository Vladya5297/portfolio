import type {Invader, Sprite} from '../game/types';

export const toggleImage = (invader: Invader, sprites: Sprite[]): void => {
    if (invader.image === sprites[0]) {
        invader.image = sprites[1];
        return;
    }

    if (invader.image === sprites[1]) {
        invader.image = sprites[0];
        return;
    }
};
