import {Button} from '../../entities/button';
import logo from '../../assets/space-invaders-logo.png';
import font from '../../assets/space-invaders.woff';
import {run} from '../run';

import {buttonHeight, buttonStyle, buttonWidth} from './constants';

const image = new Image();
const imageLoaded = new Promise<boolean>(resolve => {
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
});
image.src = logo.src;

const fontFace = new FontFace('SpaceInvaders', `url(${font})`);
const fontLoaded = fontFace.load().then(result => {
    document.fonts.add(result);
    return true;
});

export const start = async (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d')!;
    context.clearRect(0, 0, canvas.width, canvas.height);

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
        text: 'Start',
        style: buttonStyle,
        onMouseDown: () => {
            button.unload();
            run(canvas);
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
};
