import type {Module} from '../game/types';

export const draw: Module = ({context, canvas}, {player, controls}) => {
    const {x, y, width, height, image, speed} = player;

    context.drawImage(image, x, y, width, height);

    const left = x;
    const right = x + width;

    // Check if move right available
    if (controls.rightPressed && right < canvas.width) {
        player.x += speed;
    }

    // Check if move left available
    if (controls.leftPressed && left > 0) {
        player.x -= speed;
    }
};
