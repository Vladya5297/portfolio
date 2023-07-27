import type {RafHandler} from '../../game/types';

export const draw: RafHandler = ({context}, runtime) => {
    const {value, text} = runtime.score;
    text.value = `score: ${value}`;
    text.draw(context);
};
