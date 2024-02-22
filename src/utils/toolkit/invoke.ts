import type {Lambda} from '../types';

export const invoke = (cb: Lambda): void => {cb()};
