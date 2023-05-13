import kasperskyLogo from '~/assets/kaspersky-logo.png';

import {Application} from '../Application';

const id = 'kaspersky';

export const Kaspersky = () => {
    return (
        <Application
            id={id}
            title="Kaspersky"
            image={kasperskyLogo}
            position={{column: 1, row: 1}}
            content="hello"
        />
    );
};
