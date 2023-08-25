import type {ClippyState} from './clippy';
import type {ParamsState} from './params';
import type {WindowsState} from './windows';

export type State = {
    params: ParamsState;
    windows: WindowsState;
    clippy: ClippyState;
};
