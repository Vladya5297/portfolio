import type {RafHandler} from '../../game/types';

export const draw: RafHandler = ({context}, {bullet}) => {
    if (!bullet) return;

    bullet.draw(context);
};
