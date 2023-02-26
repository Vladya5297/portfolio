import cn from 'classnames';
import type {ButtonHTMLAttributes} from 'react';

import css from './style.css';

type Props = {
    size?: 's' | 'm';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({size = 'm', className, children, ...props}: Props) => {
    const buttonClassName = cn(
        css.root,
        css[`size_${size}`],
        className,
    );

    return <button {...props} className={buttonClassName}>{children}</button>;
};
