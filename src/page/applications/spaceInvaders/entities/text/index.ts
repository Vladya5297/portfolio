import type {Position} from '../abstract';

import type {TextStyle} from './types';

export type TextParams = {
    position: Position;
    style: TextStyle;
    text: string;
};

export class Text {
    x: number;
    y: number;
    style: TextStyle;
    text: string;

    constructor({
        position,
        style,
        text,
    }: TextParams) {
        this.x = position.x;
        this.y = position.y;
        this.style = style;
        this.text = text;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.style.color;
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        context.textAlign = this.style.textAlign;
        context.textBaseline = 'middle';
        context.fillText(this.text, this.x, this.y);
    }
}
