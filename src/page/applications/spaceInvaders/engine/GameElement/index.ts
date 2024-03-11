import type {DeepPartial} from 'utility-types';

import {isDefined} from '~/utils/toolkit';
import type {Lambda} from '~/utils/types';

import type {Game} from '../Game';

import type {
    Position,
    Size,
    Bounds,
    Speed,
    Style,
    Rect,
    CollisionCallback,
} from './types';
import {DEFAULT_STYLE} from './constants';
import {checkCollision} from './utils';

export * from './types';

export type GameElementParams = DeepPartial<{
    position: Position;
    size: Size;
    speed: Speed;
    style: Style;
}>;

export class GameElement {
    /* props */

    private _x = 0;
    /**
     * Horizontal coordinate of the upper-left corner of the element.
     * The coordinate axis goes from left to right.
     */
    get x(): number {
        return this._x;
    }

    private _y = 0;
    /**
     * Vertical coordinate of the upper-left corner of the element.
     * The coordinate axis goes from top to bottom.
     */
    get y(): number {
        return this._y;
    }

    private _width = 0;
    /** Width of the element. */
    get width(): number {
        return this._width;
    }

    private _height = 0;
    /** Height of the element. */
    get height(): number {
        return this._height;
    }

    private _speedX = 0;
    /** Movement speed of the element along the x axis. */
    get speedX(): number {
        return this._speedX;
    }

    private _speedY = 0;
    /** Movement speed of the element along the y axis. */
    get speedY(): number {
        return this._speedY;
    }

    private _tags: Set<string> = new Set();
    /** Identifiers of the element. */
    get tags(): Set<string> {
        return this._tags;
    }

    /** Styles describing the display of the element. */
    style: Style = {...DEFAULT_STYLE};
    /** Text value of the element. */
    text: string | undefined;
    /** Image filling the element. */
    image: HTMLImageElement | null = null;

    private collisions: Map<GameElement | string, CollisionCallback<any>[]> = new Map();
    private destructors: Set<Lambda> = new Set();

    /* constructor */
    constructor({position, size, speed, style}: GameElementParams = {}) {
        position && this.setPosition(position);
        size && this.setSize(size);
        speed && this.setSpeed(speed);
        style && this.setStyle(style);
    }

    /* computeds */

    /** Central x-axis coordinate of the element. */
    get centerX(): number {
        return this.x + this.width / 2;
    }

    /** Central y-axis coordinate of the element. */
    get centerY(): number {
        return this.y + this.height / 2;
    }

    /** Tuple of shape `[x, y, width, height]`. */
    get rect(): Rect {
        return [this.x, this.y, this.width, this.height];
    }

    /** Coordinates of each side of the element. */
    get bounds(): Bounds {
        const {x, y, width, height} = this;

        return {
            top: y,
            bottom: y + height,
            left: x,
            right: x + width,
        };
    }

    /* methods */

    /** Merge provided object with own element position. */
    setPosition({x, y}: Partial<Position>): void {
        if (isDefined(x)) this._x = x;
        if (isDefined(y)) this._y = y;
    }

    /** Merge provided object with own element size. */
    setSize({width, height}: Partial<Size>): void {
        if (isDefined(width)) this._width = width;
        if (isDefined(height)) this._height = height;
    }

    /** Merge provided object with own element speed. */
    setSpeed({speedX, speedY}: Partial<Speed>): void {
        if (isDefined(speedX)) this._speedX = speedX;
        if (isDefined(speedY)) this._speedY = speedY;
    }

    /** Merge provided object with own element style. */
    setStyle(style: Partial<Style>): void {
        Object.assign(this.style, style);
    }

    /** Check if the element has intersection with other element. */
    collides(element: GameElement): boolean {
        const a = this.bounds;
        const b = element.bounds;

        // https://ru.stackoverflow.com/a/758539
        const top = Math.max(a.top, b.top);
        const bottom = Math.min(a.bottom, b.bottom);
        const left = Math.max(a.left, b.left);
        const right = Math.min(a.right, b.right);

        return top <= bottom && left <= right;
    }

    /** Shift the element by the speed value. */
    move(delta: number): void {
        this._x += this._speedX * delta;
        this._y += this._speedY * delta;
    }

    private drawRect(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.style.backgroundColor;
        context.fillRect(...this.rect);
    }

    private drawBorders(context: CanvasRenderingContext2D): void {
        context.strokeStyle = this.style.borderColor;
        context.lineWidth = this.style.borderWidth;
        context.strokeRect(...this.rect);
    }

    private drawText(context: CanvasRenderingContext2D, text: string): void {
        context.fillStyle = this.style.color;
        context.lineWidth = this.style.fontWeight;
        context.font = `${this.style.fontSize}px ${this.style.fontFamily}`;
        context.textAlign = this.style.textAlign;
        context.textBaseline = this.style.textBaseline;
        context.fillText(
            text,
            this.centerX,
            this.centerY,
            this.style.fitText ? this.width : undefined,
        );
    }

    private drawImage(context: CanvasRenderingContext2D, image: HTMLImageElement): void {
        context.drawImage(image, ...this.rect);
    }

    /** Draw the element. */
    draw(context: CanvasRenderingContext2D): void {
        this.drawRect(context);
        this.drawBorders(context);
        if (this.image) this.drawImage(context, this.image);
        if (this.text) this.drawText(context, this.text);
    }

    /**
     * When the element collides other, the callback will be invoked.
     * Returns unsubscribe function.
     */
    addOnCollision(
        value: GameElement | string,
        callback: CollisionCallback<this>,
    ): Lambda {
        const array = this.collisions.get(value) ?? [];
        array.push(callback);
        this.collisions.set(value, array);

        return () => this.removeOnCollision(value, callback);
    }

    /** Remove collision callback. */
    removeOnCollision(
        value: GameElement | string,
        callback: CollisionCallback<this>,
    ): void {
        const array = this.collisions.get(value) ?? [];
        const result = array.filter(val => val !== callback);
        this.collisions.set(value, result);
    }

    /** Check collision with all registered elements, and call corresponding callbacks. */
    checkCollisions(game: Game): void {
        this.collisions.forEach((callbacks, value) => {
            const elements = value instanceof GameElement
                ? [value]
                : game.getElements(value);

            checkCollision(this, elements, callbacks);
        });
    }

    /**
     * When the element is destroyed, the callback will be invoked.
     * Returns unsubscribe function.
     */
    addOnDestroy(callback: Lambda): Lambda {
        this.destructors.add(callback);

        return () => this.removeOnDestroy(callback);
    }

    /** Remove destroy callback. */
    removeOnDestroy(callback: Lambda): void {
        this.destructors.delete(callback);
    }

    /** Call all element destructors. */
    destroy(): void {
        this.destructors.forEach(callback => callback());
    }
}
