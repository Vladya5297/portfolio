import cn from 'classnames';

import * as icons from './icons';
import css from './style.css';

export type IconProps = {
    name: keyof typeof icons;
    size?: 's' | 'm';
    className?: string;
};

export const Icon = ({name, size = 'm', className}: IconProps) => {
    const iconClassName = cn(
        css[`size-${size}`],
        className,
    );

    const Component = icons[name];

    return <Component className={iconClassName} />;
};
