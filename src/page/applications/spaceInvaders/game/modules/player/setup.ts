import {Player} from '../../../entities/player';
import {ARROW_LEFT_KEY, ARROW_RIGHT_KEY} from '../../constants';
import type {Setup} from '../../types';
import {onKeyDown} from '../../../utils/onKeyDown';
import {onKeyUp} from '../../../utils/onKeyUp';

import {playerHeight, playerSpeed, playerWidth} from './constants';
import {sprites} from './sprites';

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

    const clearKeyDownLeft = onKeyDown(
        ARROW_LEFT_KEY,
        () => {runtime.controls.leftPressed = true},
    );
    const clearKeyDownRight = onKeyDown(
        ARROW_RIGHT_KEY,
        () => {runtime.controls.rightPressed = true},
    );
    const clearKeyUpLeft = onKeyUp(
        ARROW_LEFT_KEY,
        () => {runtime.controls.leftPressed = false},
    );
    const clearKeyUpRight = onKeyUp(
        ARROW_RIGHT_KEY,
        () => {runtime.controls.rightPressed = false},
    );

    return () => {
        clearKeyDownLeft();
        clearKeyDownRight();
        clearKeyUpLeft();
        clearKeyUpRight();
    };
};
