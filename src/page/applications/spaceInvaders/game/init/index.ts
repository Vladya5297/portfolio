import {KEYBOARD_KEY} from '~/constants/keyboard';

import type {Game} from '../../engine';
import {GAME_SCENE} from '../constants';

import {makeButton, makeImage, makeTexts} from './utils';

export const initScene = (game: Game) => {
    const image = makeImage(game);
    const texts = makeTexts(game);
    const button = makeButton(game);

    game.addElements(image);
    game.addElements(texts);
    game.addElements(button);

    game.onKeyDown(KEYBOARD_KEY.SPACE, () => {
        game.clear();
        game.applyScene(GAME_SCENE.RUN);
    }, {once: true});
};
