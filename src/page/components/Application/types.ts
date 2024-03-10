import type {Position, Size, WindowId} from '~/page/state/windows';

import type {WindowProps} from '../Window/types';
import type {ShortcutProps} from '../Shortcut/types';
import type {LazyComponent} from '../WindowContent/types';

export type WindowParams = Omit<WindowProps, 'id' | 'root' | 'content'> & {
    content: LazyComponent;
    defaultSize?: Size;
    defaultPosition?: Position;
};

export type ShortcutParams = Omit<ShortcutProps, 'title' | 'image'>;

export type ApplicationParams = {
    id: WindowId;
    title: string;
    image: string;
    window: WindowParams | false;
    shortcut?: ShortcutParams | false;
};
