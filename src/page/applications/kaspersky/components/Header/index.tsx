import {Image} from '~/components/Image';

import logo from '../../assets/security-center-logo.png';

import css from './style.m.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <Image {...logo} maxWidth={48} alt="ksc logo" />
            <h1 className={css.label}>
                <span className={css.subtitle}>Kaspersky</span>
                <span className={css.title}>Security Center Web Console</span>
            </h1>
        </header>
    );
};
