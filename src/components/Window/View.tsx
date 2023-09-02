import React from 'react';
import type {ReactNode, HTMLAttributes} from 'react';
import cn from 'classnames';

import {SIZE} from '~/constants/size';

import {Button} from '../Button';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {useBreakpoint} from '../Breakpoint';
import {CSS_GLOBAL_CLASS} from '../styles';

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

export const View = React.memo(function View(
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
) {
    const isMobile = useBreakpoint({to: 's'});
    let size = SIZE.S;
    size = isMobile ? size.next() : size;

    const rootClassName = cn(
        CSS_GLOBAL_CLASS.BORDER_OUTSET,
        css.root,
        className,
    );

    const headerClassName = cn(css.header, active && css.active);

    return (
        <div {...props} className={rootClassName}>
            <div className={headerClassName}>
                <div className={css.title}>
                    <Icon src={image} size={size.next()} alt="logo" />

                    <Text
                        className={css.label}
                        size={size}
                        color="secondary"
                        weight="bold"
                    >
                        {title}
                    </Text>
                </div>

                {onMinimize && (
                    <Button size="s" onClick={onMinimize} title="Hide">
                        <Icon name="lodash" size={size} />
                    </Button>
                )}

                {!fullscreen && onFullScreen && (
                    <Button size="s" onClick={onFullScreen} title="Full screen">
                        <Icon name="window" size={size} />
                    </Button>
                )}

                {fullscreen && onSmallScreen && (
                    <Button size="s" onClick={onSmallScreen} title="Small screen">
                        <Icon name="windows" size={size} />
                    </Button>
                )}

                {onClose && (
                    <Button size="s" onClick={onClose} title="Close">
                        <Icon name="cross" size={size} />
                    </Button>
                )}
            </div>

            <div className={css.content}>
                {children}
            </div>
        </div>
    );
});
