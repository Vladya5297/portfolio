import type {ButtonStyle} from '../../entities/button/types';
import type {TextStyle} from '../../entities/text/types';

export const buttonWidth = 120;
export const buttonHeight = 60;
export const buttonStyle: Partial<ButtonStyle> = {
    backgroundColor: 'transparent',
    borderColor: 'red',
};

export const textStyle: Partial<TextStyle> = {
    color: 'yellow',
    fontSize: 30,
};
