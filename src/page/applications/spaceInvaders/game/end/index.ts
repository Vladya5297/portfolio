import {KEYBOARD_KEY} from '~/constants/keyboard';

import {GAME_SCENE} from '../constants';
import type {Game} from '../../engine';

import {makeButton, makeSubtitle, makeTitle} from './utils';

type Params = {
    score: number;
};

export const endScene = (game: Game, {score}: Params) => {
    const title = makeTitle(game, score);
    const subtitle = makeSubtitle(game, score);
    const button = makeButton(game);

    game.addElements(title);
    game.addElements(subtitle);
    game.addElements(button);

    game.onKeyDown(KEYBOARD_KEY.SPACE, () => {
        game.clear();
        game.applyScene(GAME_SCENE.INIT);
    }, {once: true});
};
