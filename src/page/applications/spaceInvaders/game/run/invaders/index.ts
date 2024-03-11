import {Invader} from '../../../elements/invader';
import {INVADERS_CONFIG} from '../../../elements/invader/constants';
import {GameElement} from '../../../engine';
import type {Game} from '../../../engine';
import type {Score} from '../../../elements/score';
import {GAME_SCENE} from '../../constants';

import {INVADERS_GAP, INVADERS_MAX_WIDTH, ROWS_CONFIG} from './constants';

const generateInvaders = (): Invader[] => {
    let y = 50;

    return ROWS_CONFIG.flatMap(({type, count}) => {
        // Parameters of the invader type in the row.
        const {width, height} = INVADERS_CONFIG[type];
        // Difference between largest and current invader type.
        const offset = (INVADERS_MAX_WIDTH - width) / 2;
        // Real distance between two invaders in the row.
        const gap = offset + INVADERS_GAP + offset;

        let x = 1 + offset;

        const result = Array.from({length: count}).map(() => {
            const position = {x, y};
            const invader = new Invader({type, position});
            // Shift next invader.
            x += width + gap;

            return invader;
        });

        y += height + INVADERS_GAP;

        return result;
    });
};

const addBordersCollision = (invader: Invader, game: Game): void => {
    const decreaseScore = () => {
        const score = game.getElement<Score>('score')!;
        score.decrease(1);
    };

    const processInvader = (element: Invader) => {
        if (element.direction === 'left') {
            element.setPosition({x: element.x + 1});
        }
        if (element.direction === 'right') {
            element.setPosition({x: element.x - 1});
        }
        element.toggleDirection();
        element.shiftY();
    };

    invader.addOnCollision('border_left', () => {
        const invaders = game.getElements<Invader>('invader');
        if (invaders.some(element => element.direction === 'left')) {
            invaders.forEach(processInvader);
            decreaseScore();
        }
    });

    invader.addOnCollision('border_right', () => {
        const invaders = game.getElements<Invader>('invader');
        if (invaders.some(element => element.direction === 'right')) {
            invaders.forEach(processInvader);
            decreaseScore();
        }
    });
};

const addFatalCollision = (invader: Invader, game: Game): void => {
    const callback = () => {
        game.clear();
        game.applyScene(GAME_SCENE.END, {score: 0});
    };

    const deadLine = new GameElement({
        position: {x: 0, y: game.height - 90},
        size: {width: game.width, height: 0},
    });

    invader.addOnCollision(deadLine, callback);
};

const addBulletCollision = (invader: Invader, game: Game): void => {
    const callback = () => {
        game.deleteElement(invader);
        game.deleteElement('bullet');

        const score = game.getElement<Score>('score')!;
        score.increase(10);

        const invaders = game.getElements<Invader>('invader');
        if (invaders.length) {
            invaders.forEach(value => value.speedUp());
        } else {
            game.clear();
            game.applyScene(GAME_SCENE.END, {score: score.value});
        }
    };

    invader.addOnCollision('bullet', callback);
};

export const makeInvaders = (game: Game): Invader[] => {
    const invaders = generateInvaders();
    invaders.forEach(invader => {
        addFatalCollision(invader, game);
        addBulletCollision(invader, game);
        addBordersCollision(invader, game);
    });

    return invaders;
};
