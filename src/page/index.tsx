import {Footer} from './components/Footer';
import css from './style.css';

export const Main = () => {
    return (
        <div className={css.root}>
            <main className={css.main} />
            <Footer />
        </div>
    );
};
