import type {Position, Size, Bounds} from './types';

export * from './types';

export abstract class Entity {
    abstract x: number;
    abstract y: number;
    abstract width: number;
    abstract height: number;
    abstract draw(context: CanvasRenderingContext2D): void;

    setPosition({x, y}: Position) {
        this.x = x;
        this.y = y;
    }

    setSize({width, height}: Size) {
        this.width = width;
        this.height = height;
    }

    get centerX(): number {
        return this.x + this.width / 2;
    }

    get centerY(): number {
        return this.y + this.height / 2;
    }

    get rect(): [
        Position['x'],
        Position['y'],
        Size['width'],
        Size['height']
    ] {
        return [this.x, this.y, this.width, this.height];
    }

    get bounds(): Bounds {
        const {x, y, width, height} = this;

        return {
            top: y,
            bottom: y + height,
            left: x,
            right: x + width,
        };
    }
}
