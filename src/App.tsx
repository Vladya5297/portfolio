import {Provider} from 'react-redux';

import {Main} from './page';
import {state} from './page/state';

export const App = () => {
    return (
        <Provider store={state}>
            <Main />
        </Provider>
    );
};
