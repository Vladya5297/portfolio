import {onKeyDown} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import {GAME_STATE} from '../constants';
import type {Game} from '..';

import {
    buttonFontSize,
    buttonHeight,
    buttonWidth,
    subtitleFontSize,
    titleFontSize,
} from './constants';

export function end(this: Game, {score}: {score: number}) {
    const canvas = this.canvas;
    const context = this.context;

    const title = new Text({
        value: score > 0 ? 'Victory' : 'Game Over',
        position: {x: canvas.width / 2, y: canvas.height / 4},
        style: {
            fontSize: titleFontSize,
            textAlign: 'center',
        },
    });

    const subtitle = new Text({
        value: `score: ${score}`,
        position: {x: canvas.width / 2, y: canvas.height / 3},
        style: {
            fontSize: subtitleFontSize,
            textAlign: 'center',
        },
    });

    const button = new Button({
        canvas,
        position: {
            x: getCenterCoordinate(canvas.width, buttonWidth),
            y: canvas.height * (3 / 4) - buttonHeight,
        },
        size: {
            width: buttonWidth,
            height: buttonHeight,
        },
        text: new Text({
            value: 'Restart',
            style: {fontSize: buttonFontSize},
        }),
        onDown: () => {
            const event = new KeyboardEvent('keydown', {key: ' '});
            document.dispatchEvent(event);
        },
    });

    title.draw(context);
    subtitle.draw(context);
    button.draw(context);

    this.garbage.add(button.unmount);

    // Setting delay for event listener to avoid accident press
    setTimeout(() => {
        const unmount = onKeyDown(KEYBOARD_KEY.SPACE, () => {
            this.changeState(GAME_STATE.INIT);
        });

        this.garbage.add(unmount);
    }, 300);
}
