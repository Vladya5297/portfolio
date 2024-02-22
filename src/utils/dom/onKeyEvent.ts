export type OnKeyEventUnsubscribe = () => void;

export type OnKeyEventOptions = {
    target?: HTMLElement;
    once?: boolean;
};

export const onKeyEvent = (
    eventName: 'keydown' | 'keyup',
    key: string,
    handler: (event: KeyboardEvent) => void,
    options: OnKeyEventOptions = {},
): OnKeyEventUnsubscribe => {
    const {target, once = false} = options;
    const element = (target ?? window) as HTMLElement;

    const callback = (event: KeyboardEvent) => {
        if (event.key === key) {
            handler(event);
        }
    };

    element.addEventListener(eventName, callback, {once});

    return () => {
        element.removeEventListener(eventName, callback);
    };
};
