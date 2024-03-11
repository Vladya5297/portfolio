import type {CollisionCallback, GameElement} from './index';

export const checkCollision = (
    self: GameElement,
    elements: GameElement[],
    callbacks: CollisionCallback<any>[],
): void => {
    elements.forEach(element => {
        if (element.collides(self)) {
            callbacks.forEach(callback => callback(element, self));
        }
    });
};
