import type {Module} from '../game/types';

export const draw: Module = ({context}, {invaders}) => {
    invaders.list.forEach(({x, y, width, height, image}) => {
        context.drawImage(image, x, y, width, height);
    });
};
