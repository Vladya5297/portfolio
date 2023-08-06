import type {DeepPartial} from 'utility-types';

import {Entity} from '..';
import type {Size, Position} from '..';
import {GAME_FONT_NAME} from '../../game/constants';

import type {TextStyle} from './types';

export type TextParams = DeepPartial<{
    position: Position;
    size: Size;
    style: TextStyle;
    value: string;
}>;

export class Text extends Entity {
    x = 0;
    y = 0;
    /**
     * States for `maxWidth` param of fillText
     * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText#parameters
     */
    width!: number;
    /** Not applicable */
    height!: number;

    style: TextStyle = {
        color: 'white',
        fontFamily: GAME_FONT_NAME,
        fontSize: 20,
        textAlign: 'left',
        textBaseline: 'top',
    };

    value = '';

    constructor({
        position,
        size,
        style,
        value,
    }: TextParams) {
        super();

        if (position) this.setPosition(position);
        if (size) this.setSize(size);
        if (style) this.style = {...this.style, ...style};
        if (value) this.value = value;
    }

    measure(context: CanvasRenderingContext2D): Size {
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        const metrics = context.measureText(this.value);

        const width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
        const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;

        return {width, height};
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.style.color;
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        context.textAlign = this.style.textAlign;
        context.textBaseline = this.style.textBaseline;
        context.fillText(this.value, this.x, this.y, this.width);
    }
}
