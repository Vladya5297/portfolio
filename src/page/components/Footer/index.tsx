import {Button} from '~/components/Button';

import css from './style.css';

const Item = ({text, active}) => {
    return (
        <Button style={{width: '100px'}}>
            <img src="https://plaza.one/img/win/ball.png" alt="logo" style={{width: '16px', height: '16px', marginRight: '4px'}} />
            {text}
        </Button>
    );
};

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <Item text="hello" />
        </footer>
    );
};
