import {useSelector} from 'react-redux';

import {Button} from '~/components/Button';
import type {TextProps} from '~/components/Text';
import {Text} from '~/components/Text';
import {clippyActions, selectIsClippyVisible} from '~/page/state/clippy';
import {useAction} from '~/utils/redux/useAction';

type Props = {
    size: TextProps['size'];
};

export const ClippyButton = ({size}: Props) => {
    const isVisible = useSelector(selectIsClippyVisible);
    const setVisible = useAction(clippyActions.setIsVisible);

    const onClick = () => {
        setVisible(!isVisible);
    };

    return (
        <Button size="l" onClick={onClick}>
            <Text size={size}>
                {isVisible ? 'Hide Clippy' : 'Show Clippy'}
            </Text>
        </Button>
    );
};
