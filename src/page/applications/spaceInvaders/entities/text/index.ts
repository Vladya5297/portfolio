import type {Position} from '..';

import type {TextStyle} from './types';

export type TextParams = {
    position: Position;
    style: TextStyle;
    value: string;
};

export class Text {
    x: number;
    y: number;
    style: TextStyle;
    value: string;

    constructor({
        position,
        style,
        value: text,
    }: TextParams) {
        this.x = position.x;
        this.y = position.y;
        this.style = style;
        this.value = text;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.style.color;
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        context.textAlign = this.style.textAlign;
        context.textBaseline = 'middle';
        context.fillText(this.value, this.x, this.y);
    }
}
