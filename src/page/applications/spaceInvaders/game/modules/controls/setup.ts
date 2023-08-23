import {Button} from '../../../entities/button';
import {Text} from '../../../entities/text';
import type {Setup} from '../../types';

import {
    buttonFontSize,
    buttonGap,
    buttonHeight,
    buttonsConfig,
} from './constants';

export const setup: Setup = ({canvas}, runtime) => {
    const gap = buttonGap;
    const width = (canvas.width - gap * 4) / 3;
    const height = buttonHeight;
    const y = canvas.height - height - gap;

    const buttons = buttonsConfig.map(({
        text,
        onMouseDown,
        onMouseUp,
    }, i) => {
        return new Button({
            canvas,
            position: {
                x: gap + i * (width + gap),
                y,
            },
            size: {width, height},
            text: new Text({
                value: text,
                style: {fontSize: buttonFontSize},
            }),
            onDown: onMouseDown,
            onUp: onMouseUp,
        });
    });

    runtime.controls.buttons = buttons;

    return () => {
        buttons.forEach(button => button.unmount());
    };
};
