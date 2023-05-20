import css from './style.m.css';

type Props = {
    image: string;
    title: string;
    column?: number | 'last';
    row?: number | 'last';
    onClick: () => void;
};

export const Shortcut = ({
    image,
    title,
    column,
    row,
    onClick,
}: Props) => {
    const gridColumn = column === 'last' ? -2 : column;
    const gridRow = row === 'last' ? -2 : row;

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
