import {Image} from '~/components/Image';

import logo from '../../assets/header.png';

import css from './style.m.css';

export const Header = () => {
    return (
        <div className={css.header}>
            <Image {...logo} alt="logo" maxHeight={40} />
        </div>
    );
};
