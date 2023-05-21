export const promiseDelay = <T>(promise: Promise<T>, delay: number): Promise<T> => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    }).then(() => promise);
};
