import {Game} from '../engine';

import {GAME_SCENE} from './constants';
import {endScene} from './end';
import {initScene} from './init';
import {pauseScene} from './pause';
import {runScene} from './run';

export class SpaceInvaders extends Game {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        this.addScene(GAME_SCENE.INIT, initScene);
        this.addScene(GAME_SCENE.RUN, runScene);
        this.addScene(GAME_SCENE.PAUSE, pauseScene);
        this.addScene(GAME_SCENE.END, endScene);
    }

    begin(): void {
        this.applyScene(GAME_SCENE.INIT);
        this.start();
    }

    pause() {
        if (this.scene === GAME_SCENE.RUN) {
            this.applyScene(GAME_SCENE.PAUSE);
        }
    }
}
