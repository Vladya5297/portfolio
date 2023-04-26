import {Provider} from 'react-redux';

import {Main} from './page';
import {store} from './page/state';

export const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
};
