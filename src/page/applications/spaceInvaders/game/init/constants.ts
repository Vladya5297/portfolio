import type {ButtonStyle} from '../../entities/button/types';
import type {TextStyle} from '../../entities/text/types';

export const buttonWidth = 120;
export const buttonHeight = 60;
export const buttonStyle: ButtonStyle = {
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 2,
};

export const textStyle: Partial<TextStyle> = {
    color: 'yellow',
    fontSize: 30,
};
