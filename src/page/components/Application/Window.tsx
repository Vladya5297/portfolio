import {Window as WindowBase} from '../Window';
import type {WindowProps} from '../Window/types';
import {WindowContent} from '../WindowContent';
import type {LazyComponent} from '../WindowContent/types';

type Props = Omit<WindowProps, 'content'> &{
    content: LazyComponent;
};

export const Window = ({id, root, content, ...props}: Props) => {
    return (
        <WindowBase
            {...props}
            id={id}
            root={root}
            content={(
                <WindowContent content={content} />
            )}
        />
    );
};
