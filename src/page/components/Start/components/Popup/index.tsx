import {
    useFloating,
    autoUpdate,
    shift,
} from '@floating-ui/react';
import cn from 'classnames';

import {CSS_GLOBAL_CLASS} from '~/components/styles';
import type {TextProps} from '~/components/Text';
import {useClickOutside} from '~/utils/useClickOutside';

import {ClippyButton} from '../ClippyButton';
import {WallpapersButton} from '../WallpapersButton';

import css from './style.m.css';

type Props = {
    anchor: HTMLElement | null;
    size: TextProps['size'];
    close: () => void;
};

export const Popup = ({anchor, size, close}: Props) => {
    const {refs, x, y, strategy} = useFloating({
        elements: {reference: anchor},
        placement: 'top',
        strategy: 'fixed',
        transform: false,
        whileElementsMounted: autoUpdate,
        middleware: [
            shift(),
        ],
    });

    useClickOutside(refs.floating, close);

    const className = cn(
        CSS_GLOBAL_CLASS.BORDER_OUTSET,
        css.popup,
    );

    return (
        <div
            ref={refs.setFloating}
            className={className}
            style={{
                position: strategy,
                left: x,
                top: y,
            }}
        >
            <div className={css.side} />

            <div className={css.list}>
                <WallpapersButton size={size} />
                <ClippyButton size={size} />
            </div>
        </div>
    );
};
