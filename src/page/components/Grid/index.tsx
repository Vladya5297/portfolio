import {useAtom} from '~/utils/atom';
import {windowsRootAtom} from '~/constants/atoms';

import {applications} from '../../applications';

import css from './style.m.css';

export const Grid = () => {
    const root = useAtom(windowsRootAtom);

    return (
        <div className={css.grid}>
            {root && applications.map(
                Component => <Component key={Component.name} root={root} />,
            )}
        </div>
    );
};
