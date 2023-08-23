import {isDefined} from '~/utils/toolkit';
import {getCenterCoordinate} from '~/utils/getCenterCoordinate';

import {Button} from '../../entities/button';
import {Text} from '../../entities/text';
import {invaders} from '../modules/invaders';
import {player} from '../modules/player';
import {bullet} from '../modules/bullet';
import {score} from '../modules/score';
import {controls} from '../modules/controls';
import {GAME_STATE} from '../constants';
import type {Context, Runtime} from '../types';
import type {Game} from '..';

import {buttonFontSize, buttonHeight, buttonWidth} from './constants';

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
        gameover: false,
        paused: false,
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

        if (runtime.paused) {
            const button = new Button({
                canvas,
                position: {
                    x: getCenterCoordinate(canvas.width, buttonWidth),
                    y: getCenterCoordinate(canvas.height, buttonHeight),
                },
                size: {
                    height: buttonHeight,
                    width: buttonWidth,
                },
                style: {
                    backgroundColor: 'black',
                    borderColor: 'white',
                    borderWidth: 2,
                },
                text: new Text({
                    value: 'Continue',
                    style: {fontSize: buttonFontSize},
                }),
                onDown: () => {
                    runtime.paused = false;
                    button.unmount();
                    draw();
                },
            });
            button.draw(context);
            this.garbage.add(button.unmount);
            return;
        }

        this.rafId = requestAnimationFrame(draw);
    };

    this.pause = () => {
        runtime.paused = true;
    };

    draw();
}
