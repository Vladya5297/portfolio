import {useState} from 'react';
import type {CSSProperties} from 'react';
import {useSelector} from 'react-redux';

import {useAction} from '~/utils/redux/useAction';
import {clippyActions, selectIsClippyVisible} from '~/page/state/clippy';

import {Tooltip} from './components/Tooltip';
import {useAnimation} from './utils';
import css from './style.m.css';

type Props = {
    className?: string;
    style?: CSSProperties;
};

export const Clippy = ({className, style}: Props) => {
    const src = useAnimation();
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const getMessageInit = useAction(() => clippyActions.getMessageInit());
    const closeTooltip = useAction(() => clippyActions.setMessage({visible: false}));

    const isVisible = useSelector(selectIsClippyVisible);

    return isVisible ? (
        <div className={className}>
            <button
                onClick={getMessageInit}
                ref={setAnchor}
                className={css.clippy}
            >
                <img
                    src={src}
                    alt="clippy"
                    style={style}
                />
            </button>

            <Tooltip
                anchor={anchor}
                onClick={closeTooltip}
            />
        </div>
    ) : null;
};
