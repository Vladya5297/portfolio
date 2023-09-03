import {useContext} from 'react';

import {RootContext} from '~/page/RootContext';

import {applications} from '../../applications';

import css from './style.m.css';

export const Grid = () => {
    const root = useContext(RootContext);

    return (
        <div className={css.grid}>
            {root && applications.map(
                Component => <Component key={Component.name} root={root} />,
            )}
        </div>
    );
};
