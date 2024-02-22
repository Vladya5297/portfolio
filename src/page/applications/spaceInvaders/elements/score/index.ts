import type {GameElementParams} from '../../engine';
import {GameElement} from '../../engine';

import {SCORE_STYLE} from './constants';

export class Score extends GameElement {
    value = 0;

    constructor(params: GameElementParams = {}) {
        super({
            ...params,
            style: SCORE_STYLE,
        });

        this.tags.add('score');
        this.updateText();
    }

    updateText(): void {
        this.text = `score: ${this.value}`;
    }

    increase(value: number): void {
        this.value += value;
        this.updateText();
    }

    decrease(value: number): void {
        let next = this.value - value;
        if (next < 0) {next = 0}

        this.value = next;
        this.updateText();
    }
}
