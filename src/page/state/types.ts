import type {ParamsState} from './params';
import type {WindowsState} from './windows';

export type State = {
    params: ParamsState;
    windows: WindowsState;
};
