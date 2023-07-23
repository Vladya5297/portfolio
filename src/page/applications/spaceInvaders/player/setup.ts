import type {Setup} from '../game/types';

import {playerHeight, playerSpeed, playerWidth} from './constants';
import {sprites} from './sprites';

const getKeyHandler = (
    value: boolean,
    controls: {
        rightPressed: boolean;
        leftPressed: boolean;
    },
) => (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
        controls.rightPressed = value;
    } else if (event.key === 'ArrowLeft') {
        controls.leftPressed = value;
    }
};

export const setup: Setup = ({canvas}, runtime) => {
    runtime.player = {
        x: canvas.width / 2,
        y: canvas.height - 30,
        width: playerWidth,
        height: playerHeight,
        speed: playerSpeed,
        image: sprites.player,
    };

    runtime.controls = {
        rightPressed: false,
        leftPressed: false,
    };

    const keyDownHandler = getKeyHandler(true, runtime.controls);
    const keyUpHandler = getKeyHandler(false, runtime.controls);

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
        document.removeEventListener('keydown', keyDownHandler);
        document.removeEventListener('keyup', keyUpHandler);
    };
};
