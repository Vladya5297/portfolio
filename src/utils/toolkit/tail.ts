type Result<
    T extends ReadonlyArray<unknown>
> = T extends readonly [...unknown[], infer K] ? K : T[number];

export const tail = <T extends ReadonlyArray<unknown>>(
    arr: T,
): Result<T> => {
    return arr[arr.length - 1] as Result<T>;
};
