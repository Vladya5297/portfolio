import {Entity} from '../abstract';
import type {Position, Size} from '../abstract';
import {Text} from '../text';

import {getMouseEventHandler} from './getMouseEventHandler';
import type {ButtonStyle} from './types';

export type ButtonParams = {
    canvas: HTMLCanvasElement;
    position: Position;
    size: Size;
    style: ButtonStyle;
    text: string;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
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
        onMouseDown,
        onMouseUp,
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
            text,
        });

        const mouseDownHandler = getMouseEventHandler(this.bounds, onMouseDown);
        const mouseUpHandler = getMouseEventHandler(this.bounds, onMouseUp);

        canvas.addEventListener('mousedown', mouseDownHandler);
        canvas.addEventListener('mouseup', mouseUpHandler);

        this.unload = () => {
            canvas.removeEventListener('mousedown', mouseDownHandler);
            canvas.removeEventListener('mouseup', mouseUpHandler);
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
