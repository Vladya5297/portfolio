import {Entity} from '../abstract';
import type {Position, Size} from '../abstract';
import {Bullet} from '../bullet';
import type {BulletParams} from '../bullet';

export type PlayerParams = {
    position: Position;
    size: Size;
    speed: number;
    image: HTMLImageElement;
};

export class Player extends Entity {
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    speed: number;
    image: HTMLImageElement;

    constructor({
        position,
        size,
        speed,
        image,
    }: PlayerParams) {
        super();

        this.setPosition(position);
        this.setSize(size);
        this.speed = speed;
        this.image = image;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    fire({size, speed, color}: Omit<BulletParams, 'position'>): Bullet {
        const {width, height} = size;

        const position = {
            x: this.centerX - width / 2,
            y: this.y - height,
        };

        return new Bullet({position, size, speed, color});
    }

    draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, ...this.rect);
    }
}
