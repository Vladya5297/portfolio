import {Score} from '../../../elements/score';

export const makeScore = (): Score => {
    const position = {x: 10, y: 20};

    return new Score({position});
};
