import {useRef} from 'react';
import type {ImgHTMLAttributes} from 'react';
import cn from 'classnames';

import css from './style.m.css';

type CustomProps = {
    src: string;
    width: number;
    height: number;
};

type DefaultProps = ImgHTMLAttributes<HTMLImageElement>;

export type ImageProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const Image = ({src, alt, width, height, className, style, ...props}: ImageProps) => {
    const ref = useRef<HTMLImageElement>(null);

    const onLoad = () => {
        ref.current?.classList.remove(css.loading);
    };

    const imageClassName = cn(css.image, css.loading, className);

    const imageStyle = {
        ...style,
        maxWidth: width,
        maxHeight: height,
        aspectRatio: `${width} / ${height}`,
    };

    return (
        <img
            {...props}
            src={src}
            alt={alt}
            ref={ref}
            loading="lazy"
            className={imageClassName}
            style={imageStyle}
            onLoad={onLoad}
        />
    );
};
