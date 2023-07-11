import type {Primitive} from 'utility-types';

type Params = Record<string, Primitive>;

export const apply = (params: Params) => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            searchParams.set(key, value.toString());
        } else {
            searchParams.delete(key);
        }
    });

    window.history.replaceState(null, '', url.toString());
};
