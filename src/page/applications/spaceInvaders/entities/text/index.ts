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
    /** Call `measure(context)` before accessing the property */
    width!: number;
    /** Call `measure(context)` before accessing the property */
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
        context.textBaseline = this.style.textBaseline;
        const metrics = context.measureText(this.value);

        this.width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
        this.height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;

        return {
            width: this.width,
            height: this.height,
        };
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.style.color;
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        context.textAlign = this.style.textAlign;
        context.textBaseline = this.style.textBaseline;
        context.fillText(this.value, this.x, this.y);
    }
}
