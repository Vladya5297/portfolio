import type {RafHandler} from '../../types';

export const draw: RafHandler = ({context}, {bullet}) => {
    if (!bullet) return;

    bullet.draw(context);
};
