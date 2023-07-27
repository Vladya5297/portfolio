import type {RafHandler} from '../../types';

export const draw: RafHandler = ({context}, runtime) => {
    const {value, text} = runtime.score;
    text.value = `score: ${value}`;
    text.draw(context);
};
