import cn from 'classnames';
import type {ReactNode, HTMLAttributes, ForwardedRef} from 'react';
import {forwardRef} from 'react';

import {Button} from '../Button';
import {Icon} from '../Icon';
import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.m.css';

type CustomProps = {
    title: ReactNode;
    image: string;
    active?: boolean;
    onClose?: () => void;
    onMinimize?: () => void;
};

type DefaultProps = HTMLAttributes<HTMLDivElement>;

export type ViewProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const View = forwardRef(function View(
    {
        title,
        image,
        active = true,
        className,
        children,
        onClose,
        onMinimize,
        ...props
    }: ViewProps,
    ref: ForwardedRef<HTMLDivElement | null>,
) {
    const rootClassName = cn(
        CSS_GLOBAL_CLASS.BORDER_OUTSET,
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
                    <Button size="s" className={css.icon} onClick={onMinimize}>
                        <Icon name="lodash" size="s" />
                    </Button>
                )}

                {onClose && (
                    <Button size="s" className={css.icon} onClick={onClose}>
                        <Icon name="cross" size="s" />
                    </Button>
                )}
            </div>

            {children}
        </div>
    );
});
