import cn from 'classnames';
import {forwardRef} from 'react';
import type {ForwardedRef, ButtonHTMLAttributes} from 'react';

import type {Size} from '~/constants/size';

import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.m.css';

type CustomProps = {
    active?: boolean;
    size?: 's' | 'm' | 'l' | Size;
};

type DefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const Button = forwardRef(
    function Button(
        {
            size = 'm',
            active,
            className,
            children,
            ...props
        }: ButtonProps,
        ref: ForwardedRef<HTMLButtonElement>,
    ) {
        const buttonClassName = cn(
            active ? CSS_GLOBAL_CLASS.BORDER_INSET : CSS_GLOBAL_CLASS.BORDER_OUTSET,
            css.root,
            css[`size-${size}`],
            className,
        );

        return (
            <button
                {...props}
                className={buttonClassName}
                ref={ref}
            >
                {children}
            </button>
        );
    },
);
