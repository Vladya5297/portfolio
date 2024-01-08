import {useCallback, useMemo, useRef} from 'react';
import {useSelector} from 'react-redux';
import {isPrimitive} from 'utility-types';

/**
 * If selector returns object, it will be wrapped in proxy.
 * Proxy collects all used properties and triggers next render only if they changed.
 */
export const useProxySelector = <T>(selector: (store: any) => T): T => {
    const keys = useRef<Set<string>>(new Set());

    const comparator = useCallback((a: any, b: any) => {
        if (isPrimitive(a) || isPrimitive(b)) return a === b;

        return Array.from(keys.current).every(key => a[key] === b[key]);
    }, []);

    const result = useSelector(selector, comparator);

    const proxy = useMemo(() => {
        if (isPrimitive(result)) return result;

        return new Proxy(result as object, {
            get(target, key, receiver) {
                const prop = key as keyof typeof target;
                keys.current.add(prop);

                return Reflect.get(target, key, receiver);
            },
        });
    }, [result]);

    return proxy as T;
};
