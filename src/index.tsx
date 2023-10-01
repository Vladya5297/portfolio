import {createRoot} from 'react-dom/client';

import {App} from './App';
import {APP_ID} from './constants/app';
import 'normalize.css';
import './index.css';

const container = document.getElementById(APP_ID);
const root = createRoot(container!);
root.render(<App />);
