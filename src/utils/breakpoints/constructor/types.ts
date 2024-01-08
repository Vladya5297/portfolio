import type {ValuesType} from 'utility-types';

import type {BREAKPOINTS_EVENTS} from './constants';

export type CtrValues = Record<string, BreakpointRange>;

export type CtrOptions = {
    /**
     * An element or selector of element, that would be observed by ResizeObserver
     * @default document
     */
    element?: Element | string;
    /** If provided, ResizeObserver's callback would be debounced */
    debounce?: number;
};

export type BreakpointRange = readonly [number, number];

export type BreakpointsEvent = ValuesType<typeof BREAKPOINTS_EVENTS>;

export type BreakpointsEventCallback<T> = (value: T) => void;
