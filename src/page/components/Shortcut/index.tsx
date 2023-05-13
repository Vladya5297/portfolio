import css from './style.css';

type Props = {
    image: string;
    title: string;
    row: number;
    column: number;
    onClick: () => void;
};

export const Shortcut = ({
    image,
    title,
    row: gridRow,
    column: gridColumn,
    onClick,
}: Props) => {
    return (
        <button
            className={css.root}
            style={{gridColumn, gridRow}}
            onClick={onClick}
        >
            <div className={css.image} style={{backgroundImage: `url(${image})`}} />

            <span className={css.label}>{title}</span>
        </button>
    );
};
