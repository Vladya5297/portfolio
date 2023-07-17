import {useRef, type CSSProperties, useCallback} from 'react';
import cn from 'classnames';

import css from './style.m.css';
import {getSizeParams} from './utils';

export type ImageProps = {
    src: string;
    alt: string;
    /** Original image width */
    width: number;
    /** Original image height */
    height: number;
    maxWidth?: number;
    maxHeight?: number;
    placeholder?: string;
    className?: string;
    style?: CSSProperties;
};

export const Image = ({
    src,
    alt,
    width,
    height,
    maxWidth,
    maxHeight,
    placeholder,
    className,
    style,
}: ImageProps) => {
    const ref = useRef<HTMLImageElement>(null);

    const onLoad = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.removeProperty('background-image');
    }, []);

    const imageClassName = cn(css.image, className);

    const imageStyle = {
        ...style,
        ...getSizeParams({width, height, maxWidth, maxHeight}),
        backgroundImage: placeholder ? `url("${placeholder}")` : undefined,
    };

    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={imageClassName}
            style={imageStyle}
            ref={ref}
            onLoad={onLoad}
        />
    );
};
