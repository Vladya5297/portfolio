import {isDefined} from '~/utils/isDefined';

import {invaders} from '../modules/invaders';
import {player} from '../modules/player';
import {bullet} from '../modules/bullet';
import {score} from '../modules/score';
import {controls} from '../modules/controls';
import {GAME_STATE} from '../constants';
import type {Context, Runtime} from '../types';
import type {Game} from '..';

const modules = [
    invaders,
    player,
    bullet,
    score,
    controls,
];

export function run(this: Game) {
    const canvas = this.canvas;
    const context = this.context;
    const ctx: Context = {context, canvas};

    const runtime = {
        invaders: new Set(),
        bullet: null,
        player: {},
        controls: {},
        score: {},
    } as Runtime;

    modules
        .map(({setup}) => setup?.(ctx, runtime))
        .filter(isDefined)
        .forEach(cb => this.garbage.add(cb));

    const draw = () => {
        this.clear();

        modules.forEach(({raf}) => {
            raf.forEach(handler => handler(ctx, runtime));
        });

        if (runtime.gameover) {
            this.changeState(GAME_STATE.END, {score: runtime.score.value});
            return;
        }

        this.rafId = requestAnimationFrame(draw);
    };

    draw();
}
