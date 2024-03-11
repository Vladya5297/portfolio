import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Button} from '../../elements/button';
import type {Game} from '../../engine';
import {GAME_SCENE} from '../constants';

export const makeButton = (game: Game) => {
    const size = {
        height: 60,
        width: 170,
    };

    const position = {
        x: getCenterCoordinate(game.width, size.width),
        y: getCenterCoordinate(game.height, size.height),
    };

    const button = new Button({
        canvas: game.canvas,
        size,
        position,
        text: 'Continue',
        style: {
            fontSize: 30,
        },
        onButtonDown: () => {
            game.scene = GAME_SCENE.RUN;
            game.deleteElements('pause');
            game.start();
        },
    });

    button.tags.add('pause');

    return button;
};
