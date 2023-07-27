import {Player} from '../../entities/player';
import type {Setup} from '../../game/types';

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
    }
    if (event.key === 'ArrowLeft') {
        controls.leftPressed = value;
    }
};

export const setup: Setup = ({canvas}, runtime) => {
    const position = {
        x: canvas.width / 2 - playerWidth / 2,
        y: canvas.height - 90,
    };

    const size = {
        width: playerWidth,
        height: playerHeight,
    };

    runtime.player = new Player({
        position,
        size,
        speed: playerSpeed,
        image: sprites.player,
    });

    runtime.controls.rightPressed = false;
    runtime.controls.leftPressed = false;

    const keyDownHandler = getKeyHandler(true, runtime.controls);
    const keyUpHandler = getKeyHandler(false, runtime.controls);

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);

    return () => {
        document.removeEventListener('keydown', keyDownHandler);
        document.removeEventListener('keyup', keyUpHandler);
    };
};
