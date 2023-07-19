import {Shortcut} from '~/page/components/Shortcut';

import image from './assets/github-logo.png';

export const GitHub = () => {
    return (
        <Shortcut
            tag="a"
            href="https://github.com/Vladya5297/portfolio"
            target="_blank"
            title="GitHub"
            image={image.src}
            column="last"
        />
    );
};
