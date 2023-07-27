import type {RafHandler} from '../../types';

export const draw: RafHandler = ({context}, {controls}) => {
    controls.buttons.forEach(button => button.draw(context));
};
