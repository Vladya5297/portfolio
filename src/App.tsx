import {Provider} from 'react-redux';

import {Page} from './page';
import {state} from './page/state';

export const App = () => {
    return (
        <Provider store={state}>
            <Page />
        </Provider>
    );
};
