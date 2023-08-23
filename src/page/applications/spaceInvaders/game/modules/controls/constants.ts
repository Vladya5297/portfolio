import {KEYBOARD_KEY} from '~/constants/keyboard';

export const buttonGap = 10;
export const buttonHeight = 50;
export const buttonFontSize = 20;

export const buttonsConfig = [
    {
        text: '<',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.ARROW_LEFT});
            document.dispatchEvent(event);
        },
        onMouseUp: () => {
            const event = new KeyboardEvent('keyup', {key: KEYBOARD_KEY.ARROW_LEFT});
            document.dispatchEvent(event);
        },
    },
    {
        text: 'fire',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.SPACE});
            document.dispatchEvent(event);
        },
    },
    {
        text: '>',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.ARROW_RIGHT});
            document.dispatchEvent(event);
        },
        onMouseUp: () => {
            const event = new KeyboardEvent('keyup', {key: KEYBOARD_KEY.ARROW_RIGHT});
            document.dispatchEvent(event);
        },
    },
];
