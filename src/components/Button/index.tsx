import cn from 'classnames';
import type {ButtonHTMLAttributes} from 'react';

import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.m.css';

type CustomProps = {
    active?: boolean;
    size?: 's' | 'm';
};

type DefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const Button = ({size = 'm', active, className, children, ...props}: ButtonProps) => {
    const buttonClassName = cn(
        active ? CSS_GLOBAL_CLASS.BORDER_INSET : CSS_GLOBAL_CLASS.BORDER_OUTSET,
        css.root,
        css[`size-${size}`],
        className,
    );

    return <button {...props} className={buttonClassName}>{children}</button>;
};
