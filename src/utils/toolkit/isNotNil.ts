export const isNotNil = <T>(value: T | null | undefined | void): value is T => {
    return value !== undefined && value !== null;
};
