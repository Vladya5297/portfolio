export const head = <T extends ReadonlyArray<unknown>>(arr: T): T[0] => {
    return arr[0];
};
