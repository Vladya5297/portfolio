import type {Style} from '../../engine';
import {GAME_FONT_NAME} from '../../game/constants';

export const SCORE_STYLE: Partial<Style> = {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    fontFamily: GAME_FONT_NAME,
    fitText: false,
};
