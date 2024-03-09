import {useMemo} from 'react';

import {useAction} from '~/utils/redux/useAction';
import {useResizeObserver} from '~/utils/dom/useResizeObserver';
import {windowsActions} from '~/page/state/windows';

export const useRootSize = (root: HTMLElement | null): void => {
    const setConstraints = useAction(
        ({width, height}: DOMRect) => windowsActions.setConstraints({width, height}),
    );

    const rootRef = useMemo(() => ({current: root}), [root]);
    useResizeObserver(rootRef, setConstraints, {debounce: 100});
};
