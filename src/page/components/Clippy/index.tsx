import {useRef, useState} from 'react';
import type {CSSProperties} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {clippyActions} from '~/page/state/clippy';

import {getNewAnimation, useAnimations} from './utils';
import {Tooltip} from './components/Tooltip';
import image from './assets/clippy.png';
import css from './style.m.css';

type Props = {
    className?: string;
    style?: CSSProperties;
};

export const Clippy = ({className, style}: Props) => {
    const animations = useAnimations();

    const tid = useRef<ReturnType<typeof setTimeout>>();
    const [src, setSrc] = useState(image.src);

    const [isMessageOpen, setIsMessageOpen] = useState(true);
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const getMessageInit = useAction(clippyActions.getMessageInit);

    const onClick = () => {
        getMessageInit();
        setIsMessageOpen(true);

        const newAnimation = getNewAnimation(src, animations);
        setSrc(newAnimation.src);

        clearTimeout(tid.current);
        tid.current = setTimeout(() => {
            setSrc(image.src);
        }, newAnimation.duration);
    };

    const onMessageClick = () => {
        setIsMessageOpen(false);
    };

    return (
        <div className={className}>
            <Tooltip
                anchor={anchor}
                isOpen={isMessageOpen}
                onClick={onMessageClick}
            />

            <button
                onClick={onClick}
                ref={setAnchor}
                className={css.clippy}
            >
                <img
                    src={src}
                    alt="clippy"
                    style={style}
                />
            </button>
        </div>
    );
};
