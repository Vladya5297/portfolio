type Params = {
    min?: number;
    max?: number;
};

export const int = (params: Params = {}) => {
    const {
        min = 0,
        max = 1,
    } = params;

    const range = max - min + 1;

    return Math.floor(Math.random() * range) + min;
};
