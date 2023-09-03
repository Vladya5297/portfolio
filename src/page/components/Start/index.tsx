import {useCallback, useContext, useState} from 'react';
import cn from 'classnames';

import {SIZE} from '~/constants/size';
import {Button} from '~/components/Button';
import {Icon} from '~/components/Icon';
import {Text} from '~/components/Text';
import {useBreakpoint} from '~/components/Breakpoint';
import {RootContext} from '~/page/RootContext';

import {Popup} from './components/Popup';
import {WallpapersWindow} from './components/WallpapersWindow';
import image from './assets/windows-logo.png';
import css from './style.m.css';

type Props = {
    className?: string;
};

export const Start = ({className}: Props) => {
    const isMobile = useBreakpoint({to: 's'});
    const size = isMobile ? SIZE.M : SIZE.S;

    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const root = useContext(RootContext);

    const onClick = () => {
        setIsPopupOpen(value => !value);
    };

    const close = useCallback(() => {
        setIsPopupOpen(false);
    }, []);

    return (
        <>
            <Button
                onClick={onClick}
                ref={setAnchor}
                active={isPopupOpen}
                className={cn(css.start, className)}
            >
                <Icon src={image.src} alt="logo" size="l" />

                <Text weight="bold" size={size}>Start</Text>
            </Button>

            {isPopupOpen ? (
                <Popup
                    anchor={anchor}
                    close={close}
                    size={size}
                />
            ) : null}

            {root ? (
                <WallpapersWindow root={root} />
            ) : null}
        </>
    );
};
