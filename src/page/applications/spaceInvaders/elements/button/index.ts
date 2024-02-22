import {invoke} from '~/utils/toolkit';
import type {Lambda} from '~/utils/types';

import type {GameElementParams} from '../../engine';
import {GameElement} from '../../engine';
import {GAME_FONT_NAME} from '../../game/constants';

import {getEventHandler} from './getEventHandler';

export type ButtonParams = {
    text: string;
    canvas: HTMLCanvasElement;
    onButtonDown?: Lambda;
    onButtonUp?: Lambda;
} & GameElementParams;

const DEFAULT_STYLE = {
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 2,
    fontFamily: GAME_FONT_NAME,
    color: 'white',
};

export class Button extends GameElement {
    constructor({
        canvas,
        style,
        text,
        onButtonDown,
        onButtonUp,
        ...rest
    }: ButtonParams) {
        super(rest);

        this.text = text;
        this.setStyle({...DEFAULT_STYLE, ...style});

        const garbage: Array<(() => void)> = [];

        if (onButtonDown) {
            const downHandler = getEventHandler(this.bounds, onButtonDown);
            const events = ['touchstart', 'mousedown'] as const;
            const unmounts = events.map(event => {
                canvas.addEventListener(event, downHandler);
                return () => canvas.removeEventListener(event, downHandler);
            });
            garbage.push(...unmounts);
        }

        if (onButtonUp) {
            const upHandler = getEventHandler(this.bounds, onButtonUp);
            const events = ['touchend', 'mouseup'] as const;
            const unmounts = events.map(event => {
                canvas.addEventListener(event, upHandler);
                return () => canvas.removeEventListener(event, upHandler);
            });
            garbage.push(...unmounts);
        }

        this.addOnDestroy(() => {
            garbage.forEach(invoke);
        });
    }
}
