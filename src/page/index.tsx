import {Footer} from './components/Footer';
import {Kaspersky} from './components/Kaspersky';
import css from './style.m.css';

export const Main = () => {
    return (
        <div className={css.root}>
            <main className={css.main}>
                <div className={css.grid}>
                    <Kaspersky />
                </div>
            </main>
            <Footer />
        </div>
    );
};
