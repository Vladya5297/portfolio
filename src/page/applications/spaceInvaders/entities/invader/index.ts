import {Entity} from '../abstract';
import type {Position, Size} from '../abstract';

import type {Sprites} from './types';

export type InvaderParams = {
    position: Position;
    size: Size;
    speedX: number;
    speedY: number;
    sprites: Sprites;
};

export class Invader extends Entity {
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    sprites: Sprites;
    speedX: number;
    speedY: number;
    private spriteIndex = 0;

    constructor({
        position,
        size,
        speedX,
        speedY,
        sprites,
    }: InvaderParams) {
        super();

        this.setPosition(position);
        this.setSize(size);
        this.sprites = sprites;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    get image() {
        return this.sprites[this.spriteIndex];
    }

    toggleImage() {
        // eslint-disable-next-line no-bitwise
        this.spriteIndex ^= 1;
    }

    moveX() {
        this.x += this.speedX;
    }

    moveY() {
        this.y += this.speedY;
    }

    toggleMoveDirection() {
        this.speedX = -this.speedX;
    }

    speedUp(value: number) {
        if (this.speedX >= 0) {
            this.speedX += value;
        }
        if (this.speedX < 0) {
            this.speedX -= value;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, ...this.rect);
    }
}
