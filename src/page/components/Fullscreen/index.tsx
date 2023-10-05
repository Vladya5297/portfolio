import type {ReactNode} from 'react';

import {createStateContext} from '~/utils/createStateContext';

const {Provider, useGet, useSet} = createStateContext<ReactNode>(null);

export const FullscreenProvider = Provider;
export const useFullscreen = useSet;

export const Fullscreen = () => {
    const component = useGet();

    return <>{component}</>;
};
