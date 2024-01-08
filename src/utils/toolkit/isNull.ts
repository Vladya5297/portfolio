export const isNull = <T>(value: T | null): value is null => {
    return value === null;
};
