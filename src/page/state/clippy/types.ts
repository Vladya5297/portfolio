import type {Status} from '~/constants/status';

export type ClippyMessage = {
    status: Status;
    value: string;
    visible: boolean;
};

export type ClippyState = {
    visible: boolean;
    message: ClippyMessage;
};
