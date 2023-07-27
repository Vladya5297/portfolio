import {Button} from '../../entities/button';
import type {Setup} from '../../game/types';

import {buttonStyle, buttonsConfig} from './constants';

export const setup: Setup = ({canvas}, runtime) => {
    const gap = 10;
    const width = (canvas.width - gap * 4) / 3;
    const height = 50;
    const y = canvas.height - height - gap;

    const buttons = buttonsConfig.map(({
        text,
        onMouseDown,
        onMouseUp,
    }, i) => {
        const position = {
            x: gap + i * (width + gap),
            y,
        };

        return new Button({
            canvas,
            position,
            size: {width, height},
            style: buttonStyle,
            text,
            onDown: onMouseDown,
            onUp: onMouseUp,
        });
    });

    runtime.controls.buttons = buttons;

    return () => {
        buttons.forEach(button => button.unload());
    };
};
