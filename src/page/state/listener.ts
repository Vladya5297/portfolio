import {createListenerMiddleware} from '@reduxjs/toolkit';

import type {State} from './types';

export const listener = createListenerMiddleware<State>();
