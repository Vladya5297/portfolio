import type {Game} from '../../engine';

import {makeButton} from './utils';

export const pauseScene = (game: Game): void => {
    const button = makeButton(game);
    game.addElements(button);
    button.draw(game.context);
    game.stop();
};
