import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Player} from '../../../elements/player';
import type {Game} from '../../../engine';

const addGameFieldCollision = (player: Player): void => {
    player.addOnCollision('border_left', () => player.moveRight());
    player.addOnCollision('border_right', () => player.moveLeft());
};

export const makePlayer = (game: Game): Player => {
    const player = new Player();
    const position = {
        x: getCenterCoordinate(game.width, player.width),
        y: game.height - 90,
    };
    player.setPosition(position);

    addGameFieldCollision(player);

    return player;
};
