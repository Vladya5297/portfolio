import {KEYBOARD_KEY} from '~/constants/keyboard';

import type {Game} from '../../engine';

import {makeControls} from './controls';
import {makeInvaders} from './invaders';
import {makePlayer} from './player';
import {makeScore} from './score';
import {makeBullet} from './bullet';
import {makeBorders} from './borders';

export const runScene = (game: Game): void => {
    const borders = makeBorders(game);
    const invaders = makeInvaders(game);
    const player = makePlayer(game);
    const controls = makeControls(game);
    const score = makeScore();

    game.addElements(borders);
    game.addElements(invaders);
    game.addElements(player);
    game.addElements(controls);
    game.addElements(score);

    game.onKeyDown(KEYBOARD_KEY.ARROW_LEFT, () => {
        player.goLeft();
    });
    game.onKeyUp(KEYBOARD_KEY.ARROW_LEFT, () => {
        player.stop();
    });

    game.onKeyDown(KEYBOARD_KEY.ARROW_RIGHT, () => {
        player.goRight();
    });
    game.onKeyUp(KEYBOARD_KEY.ARROW_RIGHT, () => {
        player.stop();
    });

    game.onKeyDown(KEYBOARD_KEY.SPACE, () => {
        const current = game.getElement('bullet');
        if (current) return;

        const bullet = makeBullet(game);
        player.fire(bullet);
        game.addElements(bullet);
    });
};
