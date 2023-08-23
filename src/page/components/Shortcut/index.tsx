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

export type ShortcutProps = {
    image: string;
    title: string;
} & (
    ButtonProps | LinkProps
);

export const Shortcut = ({
    tag: Tag = 'button',
    image,
    title,
    ...rest
}: ShortcutProps) => {
    return (
        <Tag
            className={css.root}
            {...rest}
        >
            <div className={css.image} style={{backgroundImage: `url(${image})`}} />

            <span className={css.label}>{title}</span>
        </Tag>
    );
};
