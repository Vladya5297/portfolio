import type {CSSProperties} from 'react';
import cn from 'classnames';

import css from './style.m.css';

export type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    maxWidth?: CSSProperties['maxWidth'];
    maxHeight?: CSSProperties['maxHeight'];
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
};

export const Image = ({
    src,
    alt,
    width,
    height,
    maxWidth = 'fit-content',
    maxHeight = 'fit-content',
    placeholder,
    className,
    style,
}: ImageProps) => {
    const imageClassName = cn(css.image, className);

    const imageStyle = {
        ...style,
        maxWidth,
        maxHeight,
        aspectRatio: `${width} / ${height}`,
        backgroundImage: placeholder ? `url("${placeholder}")` : undefined,
    };

    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={imageClassName}
            style={imageStyle}
        />
    );
};
