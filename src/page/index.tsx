import {Provider} from 'react-redux';

import {Window} from './components/Window';
import {Footer} from './components/Footer';
import {store} from './state';
import css from './style.css';

export const Main = () => {
    return (
        <Provider store={store}>
            <div className={css.root}>
                <main className={css.main} />
                <Footer />
                <Window config={{title: 'Hello'}}>
                    <div>World</div>
                </Window>
            </div>
        </Provider>
    );
};
