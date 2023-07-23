import type {Module} from '../game/types';

export const draw: Module = ({context}, {bullet}) => {
    if (!bullet) return;

    const {x, y, width, height, color} = bullet;

    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = color;
    context.fill();
    context.closePath();
};
