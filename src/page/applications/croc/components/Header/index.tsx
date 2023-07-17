import {Image} from '~/components/Image';

import logo from '../../assets/brainz-logo.png';

import css from './style.m.css';

export const Header = () => {
    return (
        <div className={css.wrapper}>
            <Image {...logo} alt="logo" maxHeight={80} />
            <div className={css.background} />
        </div>
    );
};
