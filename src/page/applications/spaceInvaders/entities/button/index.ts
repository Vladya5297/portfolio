import {Entity} from '..';
import type {Position, Size} from '..';
import type {Text} from '../text';

import {getEventHandler} from './getEventHandler';
import type {ButtonStyle} from './types';

export type ButtonParams = {
    canvas: HTMLCanvasElement;
    position: Position;
    size: Size;
    style: ButtonStyle;
    text: Text;
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
    unmount: () => void;

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

        this.text = text;
        this.text.setPosition({x: this.centerX, y: this.centerY});
        this.text.style.textAlign = 'center';
        this.text.style.textBaseline = 'middle';

        const downHandler = getEventHandler(this.bounds, onMouseDown);
        const upHandler = getEventHandler(this.bounds, onMouseUp);

        canvas.addEventListener('touchstart', downHandler);
        canvas.addEventListener('touchend', upHandler);

        canvas.addEventListener('mousedown', downHandler);
        canvas.addEventListener('mouseup', upHandler);

        this.unmount = () => {
            canvas.removeEventListener('touchstart', downHandler);
            canvas.removeEventListener('touchend', upHandler);

            canvas.removeEventListener('mousedown', downHandler);
            canvas.removeEventListener('mouseup', upHandler);
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
