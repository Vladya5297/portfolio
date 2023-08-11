import {onKeyEvent} from './onKeyEvent';

type Unsubscribe = () => void;

type Options = {
    target?: HTMLElement;
};

export const onKeyUp = (
    key: string,
    handler: (event: KeyboardEvent) => void,
    options?: Options,
): Unsubscribe => {
    return onKeyEvent('keyup', key, handler, options);
};
