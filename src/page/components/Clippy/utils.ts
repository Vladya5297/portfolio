import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

import {selectClippyAnimation} from '~/page/state/clippy';

import image from './assets/clippy.png';

export const useAnimation = (): string => {
    const animation = useSelector(selectClippyAnimation);
    const [src, setSrc] = useState(image.src);
    const tid = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        // Initial value
        if (!animation.src) return;

        setSrc(animation.src);

        clearTimeout(tid.current);
        tid.current = setTimeout(() => {
            setSrc(image.src);
        }, animation.duration);

        return () => {
            clearTimeout(tid.current);
        };
    }, [animation]);

    return src;
};
