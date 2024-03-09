import {fullscreenAtom} from '~/constants/atoms';
import {useAtom} from '~/utils/atom';

import css from './style.m.css';

export const Fullscreen = () => {
    const component = useAtom(fullscreenAtom);

    return component ? <div className={css.fullscreen}>{component}</div> : null;
};
