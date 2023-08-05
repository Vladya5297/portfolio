export const debounce = <T extends (...args: any[]) => void>(
    cb: T,
    delay: number,
): ((...args: Parameters<T>) => void) => {
    let tid: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(tid);
        tid = setTimeout(() => cb(...args), delay);
    };
};
