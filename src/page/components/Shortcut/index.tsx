import type {ShortcutProps} from './types';
import css from './style.m.css';

export const Shortcut = ({
    tag = 'button',
    image,
    title,
    href,
    target,
    onClick,
}: ShortcutProps) => {
    const Component = tag;
    const props = tag === 'a'
        ? {href, target}
        : {onClick};

    return (
        <Component
            className={css.root}
            {...props}
        >
            <div className={css.image} style={{backgroundImage: `url(${image})`}} />

            <span className={css.label}>{title}</span>
        </Component>
    );
};
