import {Button} from '~/components/Button';
import type {TextProps} from '~/components/Text';
import {Text} from '~/components/Text';
import {wallpapersActions} from '~/page/state/wallpapers';
import {useAction} from '~/utils/redux/useAction';

type Props = {
    size: TextProps['size'];
};

export const WallpapersButton = ({size}: Props) => {
    const setIsOpened = useAction(wallpapersActions.setIsOpened);

    const onClick = () => {
        setIsOpened(true);
    };

    return (
        <Button size="l" onClick={onClick}>
            <Text size={size}>
                Change wallpapers
            </Text>
        </Button>
    );
};
