import type {RafHandler} from '../../types';

export const draw: RafHandler = ({context}, {invaders}) => {
    invaders.forEach(invader => invader.draw(context));
};
