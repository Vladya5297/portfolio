import type {Invader} from '../../../elements/invader';
import type {Score} from '../../../elements/score';
import type {Game, Rect} from '../../../engine';
import {GameElement} from '../../../engine';

const addInvadersCollision = (border: GameElement, game: Game): void => {
    const callback = () => {
        const invaders = game.getElements<Invader>('invader');
        invaders.forEach(value => {
            value.toggleDirection();
            value.shiftY();
        });

        const score = game.getElement<Score>('score')!;
        score.decrease(1);
    };

    border.addOnCollision('invader', callback);
};

const makeBorder = ([x, y, width, height]: Rect): GameElement => {
    const position = {x, y};
    const size = {width, height};

    const border = new GameElement({position, size});
    border.tags.add('border');

    return border;
};

const makeLeftBorder = (game: Game): GameElement => {
    const border = makeBorder([0, 0, 0, game.height]);
    border.tags.add('border_left');
    addInvadersCollision(border, game);

    return border;
};

const makeRightBorder = (game: Game): GameElement => {
    const border = makeBorder([game.width, 0, 0, game.height]);
    border.tags.add('border_right');
    addInvadersCollision(border, game);

    return border;
};

const makeTopBorder = (game: Game): GameElement => {
    const border = makeBorder([0, 0, game.width, 0]);
    border.tags.add('border_top');

    return border;
};

const makeBottomBorder = (game: Game): GameElement => {
    const border = makeBorder([0, game.height, game.width, 0]);
    border.tags.add('border_bottom');

    return border;
};

export const makeBorders = (game: Game): GameElement[] => {
    return [
        makeLeftBorder(game),
        makeRightBorder(game),
        makeTopBorder(game),
        makeBottomBorder(game),
    ];
};
