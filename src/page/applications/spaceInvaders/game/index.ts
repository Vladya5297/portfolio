import {noop} from '~/utils/toolkit';

import {GAME_STATE} from './constants';
import {end} from './end';
import {run} from './run';
import {init} from './init';
import type {GameState} from './types';

export class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    rafId!: number;
    garbage: Set<() => void> = new Set();

    init: (params?: any) => void;
    run: (params?: any) => void;
    end: (params?: any) => void;
    pause = noop;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d')!;

        this.init = init;
        this.run = run;
        this.end = end;
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    changeState(state: GameState, params?: Record<string, any>) {
        this.unmount();
        this.clear();

        switch (state) {
            case GAME_STATE.INIT: {
                this.init(params);
                break;
            }
            case GAME_STATE.RUN: {
                this.run(params);
                break;
            }
            case GAME_STATE.END: {
                this.end(params);
                break;
            }
            default: {
                break;
            }
        }
    }

    unmount() {
        this.garbage.forEach(cb => cb());
        this.garbage.clear();

        cancelAnimationFrame(this.rafId);
    }
}
