import {useSelector} from 'react-redux';

import {STATUS} from '~/constants/status';
import {selectClippyMessage, selectClippyMessageStatus} from '~/page/state/clippy';

export const Message = () => {
    const message = useSelector(selectClippyMessage);
    const status = useSelector(selectClippyMessageStatus);

    return <>{status === STATUS.PENDING ? '...' : message}</>;
};
