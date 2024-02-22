import {Bullet} from '../../../elements/bullet';
import type {Score} from '../../../elements/score';
import type {Game} from '../../../engine';

const addGameFieldCollision = (bullet: Bullet, game: Game): void => {
    const callback = () => {
        const score = game.getElement<Score>('score')!;
        score.decrease(10);

        game.deleteElement(bullet);
    };

    bullet.addOnCollision('border_top', callback);
};

export const makeBullet = (game: Game): Bullet => {
    const bullet = new Bullet();

    addGameFieldCollision(bullet, game);

    return bullet;
};
