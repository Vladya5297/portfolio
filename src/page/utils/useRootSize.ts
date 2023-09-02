import {useAction} from '~/utils/redux/useAction';
import {useResizeObserver} from '~/utils/dom/useResizeObserver';

import {windowsActions} from '../state/windows';

export const useRootSize = (root: HTMLElement | null): void => {
    const setConstraints = useAction((
        {width, height}: DOMRect,
    ) => windowsActions.setConstraints({width, height}));

    useResizeObserver(root, setConstraints);
};
