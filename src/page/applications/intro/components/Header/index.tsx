import {Image} from '~/components/Image';

import image from '../../assets/wordart.png';

import css from './style.m.css';

export const Header = () => {
    return (
        <div className={css.header}>
            <Image {...image} alt="welcome logo" maxWidth={400} />
        </div>
    );
};
