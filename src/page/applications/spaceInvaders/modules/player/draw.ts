import type {RafHandler} from '../../game/types';

export const draw: RafHandler = ({context, canvas}, {player, controls}) => {
    player.draw(context);
    const bounds = player.bounds;

    // Check if move right available
    if (controls.rightPressed && bounds.right < canvas.width) {
        player.moveRight();
    }

    // Check if move left available
    if (controls.leftPressed && bounds.left > 0) {
        player.moveLeft();
    }
};
