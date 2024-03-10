import {memo} from 'react';

import {applications} from '../../applications';

import css from './style.m.css';

export const Grid = memo(function Grid() {
    return (
        <div className={css.grid}>
            {applications.map(
                Component => <Component key={Component.id} />,
            )}
        </div>
    );
});
