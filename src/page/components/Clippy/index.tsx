import {useRef, useState} from 'react';
import type {CSSProperties} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/redux/useAction';
import {clippyActions, selectIsClippyVisible} from '~/page/state/clippy';

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

    const [isTooltipOpen, setIsTooltipOpen] = useState(true);
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const getMessageInit = useAction(clippyActions.getMessageInit);

    const onClick = () => {
        getMessageInit();
        setIsTooltipOpen(true);

        const newAnimation = getNewAnimation(src, animations);
        setSrc(newAnimation.src);

        clearTimeout(tid.current);
        tid.current = setTimeout(() => {
            setSrc(image.src);
        }, newAnimation.duration);
    };

    const onTooltipClick = () => {
        setIsTooltipOpen(false);
    };

    const isVisible = useSelector(selectIsClippyVisible);

    return isVisible ? (
        <div className={className}>
            <Tooltip
                anchor={anchor}
                isOpen={isTooltipOpen}
                onClick={onTooltipClick}
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
    ) : null;
};
