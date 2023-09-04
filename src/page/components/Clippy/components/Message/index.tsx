import {STATUS} from '~/constants/status';
import {selectClippyMessage} from '~/page/state/clippy';
import {useSelectorMapper} from '~/utils/redux/useSelectorMapper';
import {pick} from '~/utils/toolkit';

export const Message = () => {
    const {value, status} = useSelectorMapper(
        selectClippyMessage,
        message => pick(message, ['value', 'status']),
    );

    return <>{status === STATUS.PENDING ? '...' : value}</>;
};
