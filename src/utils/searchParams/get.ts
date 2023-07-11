export const get = <T = string>(param: string): T | null => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(param);

    return value as T;
};
