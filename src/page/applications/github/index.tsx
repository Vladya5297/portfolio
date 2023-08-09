import {Shortcut} from '~/page/components/Shortcut';

import logo from './assets/github-logo.png';

export const GitHub = () => {
    return (
        <Shortcut
            tag="a"
            href="https://github.com/Vladya5297/portfolio"
            target="_blank"
            title="GitHub"
            image={logo.src}
            column={2}
            row={3}
        />
    );
};
