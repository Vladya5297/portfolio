import type {ReactNode} from 'react';

import {createAtom} from '~/utils/atom';

export const fullscreenAtom = createAtom<ReactNode>(null);

export const windowsRootAtom = createAtom<HTMLElement | null>(null);
