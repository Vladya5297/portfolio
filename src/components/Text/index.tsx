import type {CSSProperties, ReactNode} from 'react';
import cn from 'classnames';

import type {Size} from '~/constants/size';

import css from './style.m.css';

export type TextProps = {
    size?: 's' | 'm' | 'l' | Size;
    weight?: 'bold' | 'normal';
    color?: 'primary' | 'secondary' | 'inherit';
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
};

export const Text = ({
    size = 'm',
    weight = 'normal',
    color = 'primary',
    style,
    className,
    children,
}: TextProps) => {
    const textClassname = cn(
        css.text,
        css[`size-${size}`],
        className,
    );

    const textColor = color === 'inherit'
        ? color
        : `var(--color-text-${color})`;

    return (
        <span
            className={textClassname}
            style={{
                ...style,
                fontWeight: weight,
                color: textColor,
            }}
        >
            {children}
        </span>
    );
};
