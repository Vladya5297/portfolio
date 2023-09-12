import {onKeyDown} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {loadImage} from '~/utils/loadImage';

import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import logo from '../../assets/text-logo.png';
import font from '../../assets/space-invaders.woff';
import {GAME_FONT_NAME, GAME_STATE} from '../constants';
import type {Game} from '..';

import {
    buttonHeight,
    buttonStyle,
    buttonWidth,
    textStyle,
} from './constants';

const imagePromise = loadImage(logo.src).catch(() => null);

const fontPromise = new FontFace(GAME_FONT_NAME, `url(${font})`).load()
    .then(result => {
        document.fonts.add(result);
        return result;
    }).catch(() => null);

export async function init(this: Game) {
    const canvas = this.canvas;
    const context = this.context;

    const imageOffset = 40;
    const imageWidth = canvas.width - imageOffset;
    const imageScale = logo.width / imageWidth;
    const imageHeight = logo.height / imageScale;

    const image = await imagePromise;
    image && context.drawImage(
        image,
        imageOffset / 2,
        canvas.height / 5,
        imageWidth,
        imageHeight,
    );

    const texts = [
        new Text({
            position: {
                x: 80,
                y: canvas.height / 2,
            },
            style: {
                fontSize: 24,
                textAlign: 'left',
            },
            value: '«Left» - Move left',
        }),
        new Text({
            position: {
                x: 80,
                y: canvas.height / 2 + 30,
            },
            style: {
                fontSize: 24,
                textAlign: 'left',
            },
            value: '«Right» - Move right',
        }),
        new Text({
            position: {
                x: 80,
                y: canvas.height / 2 + 60,
            },
            style: {
                fontSize: 24,
                textAlign: 'left',
            },
            value: '«Space» - Fire',
        }),
    ];

    await fontPromise;
    texts.forEach(text => text.draw(context));

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
            value: 'Start',
            style: textStyle,
        }),
        style: buttonStyle,
        onDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.SPACE});
            document.dispatchEvent(event);
        },
    });

    button.draw(context);
    this.garbage.add(button.unmount);

    const unmount = onKeyDown(KEYBOARD_KEY.SPACE, () => {
        this.changeState(GAME_STATE.RUN);
    });

    this.garbage.add(unmount);
}
