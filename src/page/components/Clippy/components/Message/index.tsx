import {Text} from '~/components/Text';
import type {Status} from '~/constants/status';
import {STATUS} from '~/constants/status';

import css from './style.m.css';

type Props = {
    status: Status;
    value: string;
};

export const Message = ({status, value}: Props) => {
    const isPending = status === STATUS.PENDING;

    return (
        <Text
            className={css.message}
            style={{textAlign: isPending ? 'center' : 'start'}}
        >
            {isPending ? '...' : value}
        </Text>
    );
};
