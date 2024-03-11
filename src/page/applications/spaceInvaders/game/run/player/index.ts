import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Player} from '../../../elements/player';
import type {Game} from '../../../engine';

const addGameFieldCollision = (player: Player): void => {
    player.addOnCollision('border_left', border => {
        const x = border.bounds.right + 1;
        player.stop();
        player.setPosition({x});
    });
    player.addOnCollision('border_right', border => {
        const x = border.bounds.left - player.width - 1;
        player.stop();
        player.setPosition({x});
    });
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
