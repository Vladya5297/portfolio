import type {CtrValues} from '../constructor/types';

export type HookParams<T extends CtrValues> = {
    from: keyof T;
    to?: keyof T;
} | {
    from?: keyof T;
    to: keyof T;
} | keyof T;
