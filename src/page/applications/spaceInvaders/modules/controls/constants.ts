import type {ButtonStyle} from '../../entities/button/types';

export const buttonStyle: ButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    fontFamily: 'SpaceInvaders',
    fontSize: 20,
};

export const buttonsConfig = [
    {
        text: '<',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: 'ArrowLeft'});
            document.dispatchEvent(event);
        },
        onMouseUp: () => {
            const event = new KeyboardEvent('keyup', {key: 'ArrowLeft'});
            document.dispatchEvent(event);
        },
    },
    {
        text: 'fire',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: ' '});
            document.dispatchEvent(event);
        },
    },
    {
        text: '>',
        onMouseDown: () => {
            const event = new KeyboardEvent('keydown', {key: 'ArrowRight'});
            document.dispatchEvent(event);
        },
        onMouseUp: () => {
            const event = new KeyboardEvent('keyup', {key: 'ArrowRight'});
            document.dispatchEvent(event);
        },
    },
];
