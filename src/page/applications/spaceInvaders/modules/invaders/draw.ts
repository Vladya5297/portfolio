import type {RafHandler} from '../../game/types';

export const draw: RafHandler = ({context}, {invaders}) => {
    invaders.forEach(invader => invader.draw(context));
};
