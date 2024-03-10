import type {HTMLAttributeAnchorTarget} from 'react';

import type {Lambda} from '~/utils/types';

export type ShortcutProps = {
    image: string;
    title: string;
    tag?: 'button' | 'a';
    onClick?: Lambda;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
};
