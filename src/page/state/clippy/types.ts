import type {Status} from '~/constants/status';

export type ClippyMessage = {
    status: Status;
    value: string;
    visible: boolean;
};

export type ClippyAnimation = {
    src: string;
    duration: number;
};

export type ClippyState = {
    visible: boolean;
    message: ClippyMessage;
    animation: ClippyAnimation;
};
