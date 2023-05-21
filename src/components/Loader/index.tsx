import type {CSSProperties} from 'react';
import cn from 'classnames';

import css from './style.m.css';

export type LoaderProps = {
    progress: number;
    className?: string;
};

export const Loader = ({progress, className}: LoaderProps) => {
    const style = {'--progress': `${progress}%`} as CSSProperties;

    const loaderClassName = cn(
        className,
        css.loader,
    );

    return (
        <div className={loaderClassName}>
            {`${progress}%`}

            <div className={css.progress} style={style}>
                {`${progress}%`}
            </div>
        </div>
    );
};
