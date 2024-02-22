import type {OnKeyEventOptions, OnKeyEventUnsubscribe} from './onKeyEvent';
import {onKeyEvent} from './onKeyEvent';

export const onKeyUp = (
    key: string,
    handler: (event: KeyboardEvent) => void,
    options?: OnKeyEventOptions,
): OnKeyEventUnsubscribe => {
    return onKeyEvent('keyup', key, handler, options);
};
