import {onKeyEvent} from './onKeyEvent';

type Unsubscribe = () => void;

type Options = {
    target?: HTMLElement;
};

export const onKeyDown = (
    key: string,
    handler: (event: KeyboardEvent) => void,
    options?: Options,
): Unsubscribe => {
    return onKeyEvent('keydown', key, handler, options);
};
