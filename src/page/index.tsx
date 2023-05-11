import fileImg from '~/assets/file.png';

import {Window} from './components/Window';
import {Footer} from './components/Footer';
import css from './style.css';

export const Main = () => {
    return (
        <div className={css.root}>
            <main className={css.main} />
            <Footer />
            <Window title="Hello" image={fileImg}>
                <div>Hello</div>
            </Window>
            <Window title="World" image={fileImg}>
                <div>World</div>
            </Window>
        </div>
    );
};
