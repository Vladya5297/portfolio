type Unsubscribe = () => void;

export const onKeyEvent = (
    eventName: 'keydown' | 'keyup',
    key: string,
    handler: (event: KeyboardEvent) => void,
): Unsubscribe => {
    const callback = (event: KeyboardEvent) => {
        if (event.key === key) handler(event);
    };

    document.addEventListener(eventName, callback);

    return () => {
        document.removeEventListener(eventName, callback);
    };
};
