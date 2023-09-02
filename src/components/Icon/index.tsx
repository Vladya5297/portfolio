import cn from 'classnames';

import type {Size} from '~/constants/size';

import * as icons from './icons';
import css from './style.m.css';

type DefaultIconProps = {
    name: keyof typeof icons;
};

type CustomIconProps = {
    name?: void;
    src: string;
    alt: string;
};

export type IconProps = {
    size?: 's' | 'm' | 'l' | Size;
    className?: string;
} & (
    DefaultIconProps | CustomIconProps
);

export const Icon = ({size, className, ...rest}: IconProps) => {
    const iconClassName = cn(
        css[`size-${size}`],
        className,
    );

    if ('src' in rest) {
        const {src, alt} = rest;

        return <img src={src} alt={alt} className={iconClassName} />;
    }

    const {name} = rest;
    const Component = icons[name];

    return <Component className={iconClassName} />;
};
