import {onKeyEvent} from './onKeyEvent';

type Unsubscribe = () => void;

export const onKeyDown = (
    key: string,
    handler: (event: KeyboardEvent) => void,
): Unsubscribe => {
    return onKeyEvent('keydown', key, handler);
};
