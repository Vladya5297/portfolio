import {KEYBOARD_KEY} from '~/constants/keyboard';

import type {Style} from '../../../engine';

export const BUTTONS_GAP = 10;

export const BUTTON_STYLE: Partial<Style> = {
    fontSize: 20,
    color: 'white',
};

export const getButtonsConfig = (canvas: HTMLCanvasElement) => [
    {
        text: '<',
        onButtonDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.ARROW_LEFT});
            canvas.dispatchEvent(event);
        },
        onButtonUp: () => {
            const event = new KeyboardEvent('keyup', {key: KEYBOARD_KEY.ARROW_LEFT});
            canvas.dispatchEvent(event);
        },
    },
    {
        text: 'fire',
        onButtonDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.SPACE});
            canvas.dispatchEvent(event);
        },
    },
    {
        text: '>',
        onButtonDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.ARROW_RIGHT});
            canvas.dispatchEvent(event);
        },
        onButtonUp: () => {
            const event = new KeyboardEvent('keyup', {key: KEYBOARD_KEY.ARROW_RIGHT});
            canvas.dispatchEvent(event);
        },
    },
];
