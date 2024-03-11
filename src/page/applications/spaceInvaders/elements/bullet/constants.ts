import type {Size, Style, Speed} from '../../engine';

export const BULLET_SIZE: Size = {
    width: 4,
    height: 10,
};

export const BULLET_STYLE: Partial<Style> = {
    backgroundColor: 'yellow',
    borderWidth: 0,
};

export const BULLET_SPEED: Speed = {
    speedX: 0,
    speedY: -300,
};
