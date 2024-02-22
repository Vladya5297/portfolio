import type {GameElementParams} from '../../engine';
import {GameElement} from '../../engine';

import {
    BULLET_SIZE,
    BULLET_SPEED,
    BULLET_STYLE,
} from './constants';

export class Bullet extends GameElement {
    constructor(params: GameElementParams = {}) {
        super({
            ...params,
            size: BULLET_SIZE,
            speed: BULLET_SPEED,
            style: BULLET_STYLE,
        });

        this.tags.add('bullet');
    }
}
