import {useSelector} from 'react-redux';
import {useState} from 'react';

import {Button} from '~/components/Button';
import {Text} from '~/components/Text';
import {selectWallpapersValue, wallpapersActions} from '~/page/state/wallpapers';
import {useAction} from '~/utils/redux/useAction';
import {wallpapers} from '~/page/state/wallpapers/constants';

import css from './style.m.css';

export const WallpapersContent = () => {
    const {name} = useSelector(selectWallpapersValue);
    const [index, setIndex] = useState<number>(
        () => wallpapers.findIndex(image => image.name === name),
    );

    const setValue = useAction(wallpapersActions.setValue);

    const prev = () => {
        const nextIndex = index - 1;
        setIndex(nextIndex);
        setValue(wallpapers[nextIndex]);
    };

    const next = () => {
        const nextIndex = index + 1;
        setIndex(nextIndex);
        setValue(wallpapers[nextIndex]);
    };

    return (
        <div className={css.root}>
            <Button
                className={css.button}
                disabled={index === 0}
                onClick={prev}
            >
                <Text weight="bold">{'<'}</Text>
            </Button>

            <Text>{name}</Text>

            <Button
                className={css.button}
                disabled={index === wallpapers.length - 1}
                onClick={next}
            >
                <Text weight="bold">{'>'}</Text>
            </Button>
        </div>
    );
};
