type Unsubscribe = () => void;

type Options = {
    target?: HTMLElement;
};

export const onKeyEvent = (
    eventName: 'keydown' | 'keyup',
    key: string,
    handler: (event: KeyboardEvent) => void,
    options: Options = {},
): Unsubscribe => {
    const {target} = options;
    const element = (target ?? document) as HTMLElement;

    const callback = (event: KeyboardEvent) => {
        if (event.key === key) handler(event);
    };

    element.addEventListener(eventName, callback);

    return () => {
        element.removeEventListener(eventName, callback);
    };
};
