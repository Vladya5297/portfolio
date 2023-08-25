import type {Status} from '~/constants/status';

export type ClippyState = {
    visible: boolean;
    message: {
        status: Status;
        value: string;
    };
};
