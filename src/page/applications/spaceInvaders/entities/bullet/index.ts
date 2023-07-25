import type {Position, Size} from '../abstract';
import {Entity} from '../abstract';

export type BulletParams = {
    position: Position;
    size: Size;
    speed: number;
    color: string;
};

export class Bullet extends Entity {
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    speed: number;
    color: string;

    constructor({
        position,
        size,
        speed,
        color,
    }: BulletParams) {
        super();

        this.setPosition(position);
        this.setSize(size);
        this.speed = speed;
        this.color = color;
    }

    move() {
        this.y -= this.speed;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(...this.rect);
    }
}
