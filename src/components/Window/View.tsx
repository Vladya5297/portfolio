import cn from 'classnames';
import type {ReactNode, HTMLAttributes, ForwardedRef} from 'react';
import {forwardRef} from 'react';

import {Button} from '../Button';
import {Icon} from '../Icon';
import {CSS_GLOBAL_CLASS} from '../styles';
import {useBreakpoint} from '../Breakpoint/useBreakpoint';

import css from './style.m.css';

type CustomProps = {
    title: ReactNode;
    image: string;
    active?: boolean;
    fullscreen?: boolean;
    onClose?: () => void;
    onMinimize?: () => void;
    onFullScreen?: () => void;
    onSmallScreen?: () => void;
};

type DefaultProps = HTMLAttributes<HTMLDivElement>;

export type ViewProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const View = forwardRef(function View(
    {
        title,
        image,
        active = true,
        fullscreen = false,
        className,
        children,
        onClose,
        onMinimize,
        onFullScreen,
        onSmallScreen,
        ...props
    }: ViewProps,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const isMobile = useBreakpoint({to: 's'});

    const size = isMobile ? 'm' : 's';

    const rootClassName = cn(
        CSS_GLOBAL_CLASS.BORDER_OUTSET,
        css[`size-${size}`],
        css.root,
        className,
    );

    const headerClassName = cn(css.header, active && css.active);

    return (
        <div {...props} className={rootClassName} ref={ref}>
            <div className={headerClassName}>
                <div className={css.title}>
                    <img src={image} width={16} height={16} alt="" />

                    <span className={css.label}>{title}</span>
                </div>

                {onMinimize && (
                    <Button size="s" onClick={onMinimize}>
                        <Icon name="lodash" size={size} />
                    </Button>
                )}

                {!fullscreen && onFullScreen && (
                    <Button size="s" onClick={onFullScreen}>
                        <Icon name="window" size={size} />
                    </Button>
                )}

                {fullscreen && onSmallScreen && (
                    <Button size="s" onClick={onSmallScreen}>
                        <Icon name="windows" size={size} />
                    </Button>
                )}

                {onClose && (
                    <Button size="s" onClick={onClose}>
                        <Icon name="cross" size={size} />
                    </Button>
                )}
            </div>

            {children}
        </div>
    );
});
