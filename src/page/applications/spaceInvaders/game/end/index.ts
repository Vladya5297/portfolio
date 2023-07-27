import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import {start} from '../start';

import {
    buttonHeight,
    buttonStyle,
    buttonWidth,
    subtitleFontSize,
    textAlign,
    textColor,
    textFontFamily,
    titleFontSize,
} from './constants';

export const end = (canvas: HTMLCanvasElement, score: number) => {
    const context = canvas.getContext('2d')!;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const title = new Text({
        value: 'Game Over',
        position: {x: canvas.width / 2, y: canvas.height / 4},
        style: {
            color: textColor,
            fontFamily: textFontFamily,
            fontSize: titleFontSize,
            textAlign,
        },
    });

    const subtitle = new Text({
        value: `score: ${score}`,
        position: {x: canvas.width / 2, y: canvas.height / 3},
        style: {
            color: textColor,
            fontFamily: textFontFamily,
            fontSize: subtitleFontSize,
            textAlign,
        },
    });

    const buttonPosition = {
        x: canvas.width / 2 - buttonWidth / 2,
        y: canvas.height * (3 / 4) - buttonHeight,
    };

    const buttonSize = {
        width: buttonWidth,
        height: buttonHeight,
    };

    const button = new Button({
        canvas,
        position: buttonPosition,
        size: buttonSize,
        text: 'Restart',
        style: buttonStyle,
        onDown: () => {
            const event = new KeyboardEvent('keydown', {key: ' '});
            document.dispatchEvent(event);
        },
    });

    title.draw(context);
    subtitle.draw(context);
    button.draw(context);

    const handler = (event: KeyboardEvent) => {
        if (event.key === ' ') {
            button.unload();
            document.removeEventListener('keydown', handler);
            start(canvas);
        }
    };

    setTimeout(() => {
        document.addEventListener('keydown', handler);
    }, 300);
};
