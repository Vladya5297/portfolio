import {useGetRoot} from '~/page/RootContext';

import {applications} from '../../applications';

import css from './style.m.css';

export const Grid = () => {
    const root = useGetRoot();

    return (
        <div className={css.grid}>
            {root && applications.map(
                Component => <Component key={Component.name} root={root} />,
            )}
        </div>
    );
};
