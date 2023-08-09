import {onKeyDown} from '~/utils/dom';

import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import type {Game} from '..';
import {GAME_STATE, SPACE_KEY} from '../constants';

import {
    buttonFontSize,
    buttonHeight,
    buttonStyle,
    buttonWidth,
    subtitleFontSize,
    titleFontSize,
} from './constants';

export function end(this: Game, {score}: {score: number}) {
    const canvas = this.canvas;
    const context = this.context;

    const title = new Text({
        value: 'Game Over',
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
            x: canvas.width / 2 - buttonWidth / 2,
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
        style: buttonStyle,
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
        const unmount = onKeyDown(SPACE_KEY, () => {
            this.changeState(GAME_STATE.INIT);
        });

        this.garbage.add(unmount);
    }, 300);
}
