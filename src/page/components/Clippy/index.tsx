import {useRef, useState} from 'react';
import type {CSSProperties} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/redux/useAction';
import {clippyActions, selectClippyMessage, selectIsClippyVisible} from '~/page/state/clippy';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/toolkit';

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

    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const getMessageInit = useAction(clippyActions.getMessageInit);

    const onClick = () => {
        getMessageInit();

        const newAnimation = getNewAnimation(src, animations);
        setSrc(newAnimation.src);

        clearTimeout(tid.current);
        tid.current = setTimeout(() => {
            setSrc(image.src);
        }, newAnimation.duration);
    };

    const closeTooltip = useAction(() => clippyActions.setMessage({visible: false}));

    const isVisible = useSelector(selectIsClippyVisible);
    const {visible: isTooltipVisible} = useSelectorMapper(
        selectClippyMessage,
        message => pick(message, ['visible']),
    );

    return isVisible ? (
        <div className={className}>
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

            {isTooltipVisible ? (
                <Tooltip
                    anchor={anchor}
                    onClick={closeTooltip}
                />
            ) : null}
        </div>
    ) : null;
};
