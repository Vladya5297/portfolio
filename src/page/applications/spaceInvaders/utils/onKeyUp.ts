import {onKeyEvent} from './onKeyEvent';

type Unsubscribe = () => void;

export const onKeyUp = (
    key: string,
    handler: (event: KeyboardEvent) => void,
): Unsubscribe => {
    return onKeyEvent('keyup', key, handler);
};
