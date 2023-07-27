import {Entity} from '..';
import type {Position, Size} from '..';
import {Text} from '../text';

import {getEventHandler} from './getEventHandler';
import type {ButtonStyle} from './types';

export type ButtonParams = {
    canvas: HTMLCanvasElement;
    position: Position;
    size: Size;
    style: ButtonStyle;
    text: string;
    onDown?: () => void;
    onUp?: () => void;
};

export class Button extends Entity {
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    style: ButtonStyle;
    text: Text;
    unload: () => void;

    constructor({
        canvas,
        position,
        size,
        style,
        text,
        onDown: onMouseDown,
        onUp: onMouseUp,
    }: ButtonParams) {
        super();

        this.setPosition(position);
        this.setSize(size);
        this.style = style;
        this.text = new Text({
            position: {
                x: this.centerX,
                y: this.centerY,
            },
            style: {
                color: style.color,
                fontFamily: style.fontFamily,
                fontSize: style.fontSize,
                textAlign: 'center',
            },
            value: text,
        });

        const downHandler = getEventHandler(this.bounds, onMouseDown);
        const upHandler = getEventHandler(this.bounds, onMouseUp);

        const isTouchScreenDevice = 'ontouchstart' in window;

        if (isTouchScreenDevice) {
            canvas.addEventListener('touchstart', downHandler);
            canvas.addEventListener('touchend', upHandler);
        } else {
            canvas.addEventListener('mousedown', downHandler);
            canvas.addEventListener('mouseup', upHandler);
        }

        this.unload = () => {
            if (isTouchScreenDevice) {
                canvas.removeEventListener('touchstart', downHandler);
                canvas.removeEventListener('touchend', upHandler);
            } else {
                canvas.removeEventListener('mousedown', downHandler);
                canvas.removeEventListener('mouseup', upHandler);
            }
        };
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.style.backgroundColor;
        context.fillRect(...this.rect);

        context.strokeStyle = this.style.borderColor;
        context.lineWidth = this.style.borderWidth;
        context.strokeRect(...this.rect);

        this.text.draw(context);
    }
}
