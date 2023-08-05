export const isDefined = <T>(value: T | undefined | void): value is T => {
    return value !== undefined;
};
