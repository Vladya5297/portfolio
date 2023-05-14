import {Footer} from './components/Footer';
import css from './style.m.css';
import {Kaspersky} from './components/Kaspersky';

export const Main = () => {
    return (
        <div className={css.root}>
            <main className={css.main}>
                <Kaspersky />
            </main>
            <Footer />
        </div>
    );
};
