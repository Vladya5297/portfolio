import {createRoot} from 'react-dom/client';

import {App} from './App';
import {ROOT_ID} from './constants/root';
import 'normalize.css';
import './index.css';

const container = document.getElementById(ROOT_ID);
const root = createRoot(container!);
root.render(<App />);
