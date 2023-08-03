import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import logo from '../../assets/text-logo.png';
import font from '../../assets/space-invaders.woff';
import {onKeyDown} from '../../utils/onKeyDown';
import {GAME_FONT_NAME, GAME_STATE, SPACE_KEY} from '../constants';
import type {Game} from '..';

import {
    buttonHeight,
    buttonStyle,
    buttonWidth,
    textStyle,
} from './constants';

const image = new Image();
const imageLoaded = new Promise<boolean>(resolve => {
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
});
image.src = logo.src;

const fontFace = new FontFace(GAME_FONT_NAME, `url(${font})`);
const fontLoaded = fontFace.load().then(result => {
    document.fonts.add(result);
    return true;
});

export async function init(this: Game) {
    const canvas = this.canvas;
    const context = this.context;

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
            value: 'Start',
            style: textStyle,
        }),
        style: buttonStyle,
        onDown: () => {
            const event = new KeyboardEvent('keydown', {key: SPACE_KEY});
            document.dispatchEvent(event);
        },
    });

    await fontLoaded && button.draw(context);

    const imageOffset = 40;
    const imageWidth = canvas.width - imageOffset;
    const imageScale = logo.width / imageWidth;
    const imageHeight = logo.height / imageScale;

    await imageLoaded && context.drawImage(
        image,
        imageOffset / 2,
        canvas.height / 4,
        imageWidth,
        imageHeight,
    );

    const unmount = onKeyDown(SPACE_KEY, () => {
        this.changeState(GAME_STATE.RUN);
    });

    this.garbage.add(button.unmount);
    this.garbage.add(unmount);
}
