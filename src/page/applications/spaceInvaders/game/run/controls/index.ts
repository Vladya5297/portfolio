import {Button} from '../../../elements/button';
import type {Game} from '../../../engine';

import {BUTTONS_GAP, BUTTON_STYLE, getButtonsConfig} from './constants';

export const makeControls = (game: Game): Button[] => {
    const buttonsConfig = getButtonsConfig(game.canvas);
    const gap = BUTTONS_GAP;
    const gapsCount = buttonsConfig.length + 1;

    const width = (game.width - gap * gapsCount) / 3;
    const height = 50;
    const size = {width, height};

    const y = game.height - height - gap;

    return buttonsConfig.map(({text, onButtonDown, onButtonUp}, index) => {
        const x = gap + index * (width + gap);
        const position = {x, y};

        return new Button({
            text,
            onButtonDown,
            onButtonUp,
            canvas: game.canvas,
            size,
            position,
            style: BUTTON_STYLE,
        });
    });
};
