import type {HTMLAttributeAnchorTarget} from 'react';

import css from './style.m.css';

type ButtonProps = {
    tag?: 'button';
    onClick: () => void;
};

type LinkProps = {
    tag: 'a';
    href: string;
    target?: HTMLAttributeAnchorTarget;
};

type Props = {
    image: string;
    title: string;
    column?: number | 'last';
    row?: number | 'last';
} & (
    ButtonProps | LinkProps
);

export const Shortcut = ({
    tag: Tag = 'button',
    image,
    title,
    column,
    row,
    ...rest
}: Props) => {
    const gridColumn = column === 'last' ? -2 : column;
    const gridRow = row === 'last' ? -2 : row;

    return (
        <Tag
            className={css.root}
            style={{gridColumn, gridRow}}
            {...rest}
        >
            <div className={css.image} style={{backgroundImage: `url(${image})`}} />

            <span className={css.label}>{title}</span>
        </Tag>
    );
};
