import {GameElement} from '../../engine';
import type {GameElementParams} from '../../engine';
import type {Bullet} from '../bullet';

import {PLAYER_IMAGE, PLAYER_SIZE, PLAYER_SPEED} from './constants';

export class Player extends GameElement {
    image = PLAYER_IMAGE;

    constructor(params: GameElementParams = {}) {
        super({...params, size: PLAYER_SIZE});

        this.tags.add('player');
    }

    goLeft(): void {
        const speedX = -PLAYER_SPEED;
        this.setSpeed({speedX});
    }

    goRight(): void {
        const speedX = PLAYER_SPEED;
        this.setSpeed({speedX});
    }

    stop(): void {
        this.setSpeed({speedX: 0});
    }

    moveLeft(): void {
        const x = this.x - PLAYER_SPEED;
        this.setPosition({x});
    }

    moveRight(): void {
        const x = this.x + PLAYER_SPEED;
        this.setPosition({x});
    }

    fire(bullet: Bullet): Bullet {
        const {width, height} = bullet;

        bullet.setPosition({
            x: this.centerX - width / 2,
            y: this.y - height,
        });

        return bullet;
    }
}
