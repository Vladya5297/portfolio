import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import {start} from '../start';

import {
    buttonHeight,
    buttonStyle,
    buttonWidth,
    textAlign,
    textColor,
    textFontFamily,
} from './constants';

export const end = (canvas: HTMLCanvasElement, score: number) => {
    const context = canvas.getContext('2d')!;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const title = new Text({
        text: 'Game Over',
        position: {x: canvas.width / 2, y: canvas.height / 4},
        style: {
            color: textColor,
            fontFamily: textFontFamily,
            fontSize: 40,
            textAlign,
        },
    });

    const subtitle = new Text({
        text: `score: ${score}`,
        position: {x: canvas.width / 2, y: canvas.height / 3},
        style: {
            color: textColor,
            fontFamily: textFontFamily,
            fontSize: 20,
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
        onMouseDown: () => {
            button.unload();
            start(canvas);
        },
    });

    title.draw(context);
    subtitle.draw(context);
    button.draw(context);
};
