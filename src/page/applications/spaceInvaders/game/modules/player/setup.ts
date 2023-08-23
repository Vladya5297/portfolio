import {onKeyDown, onKeyUp} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Player} from '../../../entities/player';
import type {Setup} from '../../types';

import {playerHeight, playerSpeed, playerWidth} from './constants';
import {sprites} from './sprites';

export const setup: Setup = ({canvas}, runtime) => {
    const position = {
        x: getCenterCoordinate(canvas.width, playerWidth),
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
        KEYBOARD_KEY.ARROW_LEFT,
        () => {runtime.controls.leftPressed = true},
    );
    const clearKeyDownRight = onKeyDown(
        KEYBOARD_KEY.ARROW_RIGHT,
        () => {runtime.controls.rightPressed = true},
    );
    const clearKeyUpLeft = onKeyUp(
        KEYBOARD_KEY.ARROW_LEFT,
        () => {runtime.controls.leftPressed = false},
    );
    const clearKeyUpRight = onKeyUp(
        KEYBOARD_KEY.ARROW_RIGHT,
        () => {runtime.controls.rightPressed = false},
    );

    return () => {
        clearKeyDownLeft();
        clearKeyDownRight();
        clearKeyUpLeft();
        clearKeyUpRight();
    };
};
