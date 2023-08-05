import {isDefined} from '~/utils/toolkit';

import type {Position, Size, Bounds} from './types';

export * from './types';

export abstract class Entity {
    abstract x: number;
    abstract y: number;
    abstract width: number;
    abstract height: number;
    abstract draw(context: CanvasRenderingContext2D): void;

    setPosition({x, y}: Partial<Position>) {
        if (isDefined(x)) this.x = x;
        if (isDefined(y)) this.y = y;
    }

    setSize({width, height}: Partial<Size>) {
        if (isDefined(width)) this.width = width;
        if (isDefined(height)) this.height = height;
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

    collides(entity: Entity) {
        const a = this.bounds;
        const b = entity.bounds;

        const top = Math.max(a.top, b.top);
        const bottom = Math.min(a.bottom, b.bottom);
        const left = Math.max(a.left, b.left);
        const right = Math.min(a.right, b.right);

        if (top < bottom && left < right) return true;

        return false;
    }
}
