import type {OnKeyEventOptions, OnKeyEventUnsubscribe} from './onKeyEvent';
import {onKeyEvent} from './onKeyEvent';

export const onKeyDown = (
    key: string,
    handler: (event: KeyboardEvent) => void,
    options?: OnKeyEventOptions,
): OnKeyEventUnsubscribe => {
    return onKeyEvent('keydown', key, handler, options);
};
