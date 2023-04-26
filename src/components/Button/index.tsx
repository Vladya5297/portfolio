import cn from 'classnames';
import type {ButtonHTMLAttributes} from 'react';

import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.css';

type CustomProps = {
    size?: 's' | 'm';
};

type DefaultProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const Button = ({size = 'm', className, children, ...props}: ButtonProps) => {
    const buttonClassName = cn(
        CSS_GLOBAL_CLASS.BORDER_INSET,
        css.root,
        css[`size-${size}`],
        className,
    );

    return <button {...props} className={buttonClassName}>{children}</button>;
};
