import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import {Button} from '../../elements/button';
import type {Game, Style} from '../../engine';
import {GameElement} from '../../engine';
import {GAME_FONT_NAME} from '../constants';

export const makeTitle = (game: Game, score: number): GameElement => {
    const position = {
        x: game.width / 2,
        y: game.height / 4,
    };

    const style: Partial<Style> = {
        fontSize: 40,
        color: 'white',
        fontFamily: GAME_FONT_NAME,
        fitText: false,
    };

    const title = new GameElement({position, style});
    title.text = score > 0 ? 'Victory' : 'Game Over';

    return title;
};

export const makeSubtitle = (game: Game, score: number): GameElement => {
    const position = {
        x: game.width / 2,
        y: game.height / 3,
    };

    const style: Partial<Style> = {
        fontSize: 20,
        color: 'white',
        fontFamily: GAME_FONT_NAME,
        fitText: false,
    };

    const subtitle = new GameElement({position, style});
    subtitle.text = `score: ${score}`;

    return subtitle;
};

export const makeButton = (game: Game): Button => {
    const size = {
        width: 150,
        height: 60,
    };

    const position = {
        x: getCenterCoordinate(game.width, size.width),
        y: game.height * (3 / 4) - size.height,

    };

    const button = new Button({
        canvas: game.canvas,
        size,
        position,
        text: 'Restart',
        style: {
            fontSize: 30,
        },
        onButtonDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.SPACE});
            game.canvas.dispatchEvent(event);
        },
    });

    return button;
};
