import {debounce, isNull} from '~/utils/toolkit';

import {assertRanges} from './assertRanges';
import {binarySearch} from './binarySearch';
import {prepareBreakpoints} from './prepareBreakpoints';
import {BREAKPOINTS_EVENTS} from './constants';
import type {
    BreakpointsEvent,
    BreakpointsEventCallback,
    CtrValues,
    CtrOptions,
    BreakpointRange,
} from './types';

export class Breakpoints<T extends CtrValues> {
    private observer: ResizeObserver;
    private element: Element | string;

    private subscribers: Record<BreakpointsEvent, Set<BreakpointsEventCallback<keyof T>>> = {
        [BREAKPOINTS_EVENTS.CHANGE]: new Set(),
    };

    private _current: keyof T | null = null;
    get current() {
        if (isNull(this._current)) {
            throw new Error('Run "observe" before accessing current breakpoint');
        }

        return this._current;
    }

    labels: ReadonlyArray<keyof T>;
    ranges: ReadonlyArray<BreakpointRange>;
    started = false;

    constructor(values: T, options: CtrOptions = {}) {
        const {ranges, labels} = prepareBreakpoints(values);

        assertRanges(ranges);

        this.labels = labels;
        this.ranges = ranges;
        this.element = options.element || document.documentElement;

        const froms = ranges.map(([from]) => from);
        const callback: ResizeObserverCallback = ([entry]) => {
            const [{inlineSize}] = entry.borderBoxSize;
            const index = binarySearch(froms, inlineSize) - 1;
            const breakpoint = labels[index];

            if (breakpoint !== this._current) {
                this._current = breakpoint;
                this.subscribers[BREAKPOINTS_EVENTS.CHANGE].forEach(cb => cb(breakpoint));
            }
        };

        this.observer = new ResizeObserver(
            options.debounce ? debounce(callback, options.debounce) : callback,
        );
    }

    observe() {
        if (this.started) {
            return this;
        }

        this.started = true;

        const element = typeof this.element === 'string' ? document.querySelector(this.element) : this.element;
        if (isNull(element)) {
            throw new Error(`Element with selector "${this.element}" not found`);
        }

        this.observer.observe(element, {box: 'border-box'});

        return this;
    }

    disconnect() {
        if (!this.started) {
            return this;
        }

        this.started = false;

        this.observer.disconnect();

        return this;
    }

    addEventListener(event: BreakpointsEvent, callback: BreakpointsEventCallback<keyof T>) {
        this.subscribers[event].add(callback);
    }

    removeEventListener(event: BreakpointsEvent, callback: BreakpointsEventCallback<keyof T>) {
        this.subscribers[event].delete(callback);
    }
}
