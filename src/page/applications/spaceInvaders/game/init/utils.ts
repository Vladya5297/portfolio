import {getCenterCoordinate} from '~/utils/getCenterCoordinate';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import {GameElement} from '../../engine';
import type {Game} from '../../engine';
import {Button} from '../../elements/button';
import logo from '../../assets/text-logo.png';
import {GAME_FONT_NAME} from '../constants';

import {logoElement} from './constants';

export const makeImage = (game: Game): GameElement => {
    const padding = 20;
    const width = game.width - padding * 2;
    const scale = logo.width / width;
    const height = logo.height / scale;
    const size = {width, height};

    const x = padding;
    const y = game.height / 5;
    const position = {x, y};

    const image = new GameElement({size, position});
    image.image = logoElement;

    return image;
};

export const makeTexts = (game: Game): GameElement[] => {
    const size = {
        height: 30,
    };

    const labels = [
        '«Left» - Move left',
        '«Right» - Move right',
        '«Space» - Fire',
    ];

    return labels.map((value, index) => {
        const y = game.height / 2 + size.height * index;
        const position = {x: 80, y};

        const text = new GameElement({
            size,
            position,
            style: {
                color: 'white',
                fontSize: 24,
                textAlign: 'left',
                fitText: false,
                fontFamily: GAME_FONT_NAME,
            },
        });

        text.text = value;

        return text;
    });
};

export const makeButton = (game: Game) => {
    const size = {
        height: 60,
        width: 120,
    };

    const position = {
        x: getCenterCoordinate(game.width, size.width),
        y: game.height * (3 / 4) - size.height,
    };

    const button = new Button({
        canvas: game.canvas,
        size,
        position,
        text: 'Start',
        style: {
            borderColor: 'red',
            color: 'yellow',
            fontSize: 30,
        },
        onButtonDown: () => {
            const event = new KeyboardEvent('keydown', {key: KEYBOARD_KEY.SPACE});
            game.canvas.dispatchEvent(event);
        },
    });

    return button;
};
