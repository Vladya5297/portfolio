import type {RafHandler} from '../../game/types';

export const draw: RafHandler = ({context}, {controls}) => {
    controls.buttons.forEach(button => button.draw(context));
};
