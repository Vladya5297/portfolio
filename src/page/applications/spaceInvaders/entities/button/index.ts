import type {DeepPartial} from 'utility-types';

import {Entity} from '..';
import type {Position, Size} from '..';
import type {Text} from '../text';

import {getEventHandler} from './getEventHandler';
import type {ButtonStyle} from './types';

export type ButtonParams = {
    text: Text;
    canvas: HTMLCanvasElement;
} & DeepPartial<{
    position: Position;
    size: Size;
    style: ButtonStyle;
    onDown: () => void;
    onUp: () => void;
}>;

export class Button extends Entity {
    x = 0;
    y = 0;
    width!: number;
    height!: number;
    style: ButtonStyle = {
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        paddingX: 20,
        paddingY: 10,
    };
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

        if (position) this.setPosition(position);
        if (style) this.style = {...this.style, ...style};

        if (size) {
            this.setSize(size);
        } else {
            const context = canvas.getContext('2d')!;
            const {width, height} = text.measure(context);
            this.setSize({
                width: width + this.style.paddingX * 2,
                height: height + this.style.paddingY * 2,
            });
        }

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
