import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {getDefaultRect} from '~/page/components/Application';
import {selectWallpapersIsOpened, wallpapersActions} from '~/page/state/wallpapers';
import {useAction} from '~/utils/redux/useAction';

import {WallpapersContent} from '../WallpapersContent';

type Props = {
    root: HTMLElement;
};

export const WallpapersWindow = ({root}: Props) => {
    const isOpened = useSelector(selectWallpapersIsOpened);
    const onClose = useAction(() => wallpapersActions.setIsOpened(false));

    const rect = getDefaultRect(root, {width: 200, height: 80});

    return (
        isOpened ? (
            <Window
                root={root}
                title="Wallpapers"
                initialSize={rect.size}
                initialPosition={rect.position}
                draggable
                onClose={onClose}
                style={{zIndex: 999}}
            >
                <WallpapersContent />
            </Window>
        ) : null
    );
};
