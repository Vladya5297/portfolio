import type {ValuesType} from 'utility-types';

import type {GameElementParams} from '../../engine';
import {GameElement} from '../../engine';

import type {INVADER_TYPE} from './constants';
import {ACCELERATION, INVADERS_CONFIG, INVADER_STYLE, SHIFT_Y, INVADER_SPEED} from './constants';

type Sprites = readonly [HTMLImageElement, HTMLImageElement];
type InvaderType = ValuesType<typeof INVADER_TYPE>;

export type InvaderParams = {
    type: InvaderType;
} & GameElementParams;

export class Invader extends GameElement {
    private sprites: Sprites;
    private spriteIndex = 0;

    constructor({type, ...rest}: InvaderParams) {
        const {width, height, sprites} = INVADERS_CONFIG[type];
        const size = {width, height};

        super({
            ...rest,
            size,
            speed: INVADER_SPEED,
            style: INVADER_STYLE,
        });

        this.sprites = sprites;
        this.image = sprites[this.spriteIndex];
        this.tags.add('invader');

        const iid = setInterval(() => this.toggleImage(), 1000);
        this.addOnDestroy(() => {
            clearInterval(iid);
        });
    }

    toggleImage(): void {
        // eslint-disable-next-line no-bitwise
        this.spriteIndex ^= 1;
        this.image = this.sprites[this.spriteIndex];
    }

    toggleDirection(): void {
        const speedX = -this.speedX;
        this.setSpeed({speedX});
    }

    speedUp(): void {
        const speedX = Math.sign(this.speedX) * (Math.abs(this.speedX) + ACCELERATION);
        this.setSpeed({speedX});
    }

    shiftY(): void {
        const y = this.y + SHIFT_Y;
        this.setPosition({y});
    }
}
