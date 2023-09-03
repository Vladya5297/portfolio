import {useSelector} from 'react-redux';

import {Window} from '~/components/Window';
import {getDefaultRect} from '~/page/components/Application';
import {selectWallpapersIsOpen, wallpapersActions} from '~/page/state/wallpapers';
import {useAction} from '~/utils/redux/useAction';

import {WallpapersContent} from '../WallpapersContent';

type Props = {
    root: HTMLElement;
};

export const WallpapersWindow = ({root}: Props) => {
    const isOpen = useSelector(selectWallpapersIsOpen);
    const onClose = useAction(() => wallpapersActions.setIsOpen(false));

    const rect = getDefaultRect(root, {width: 200, height: 80});

    return (
        isOpen ? (
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
