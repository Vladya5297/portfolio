import cn from 'classnames';
import type {ReactNode, HTMLAttributes} from 'react';
import {createPortal} from 'react-dom';

import {Button} from '../Button';
import {Icon} from '../Icon';
import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.css';

type CustomProps = {
    root?: Element;
    title?: ReactNode;
    active?: boolean;
    onClose?: () => void;
    onMinimize?: () => void;
};

type DefaultProps = HTMLAttributes<HTMLDivElement>;

type Props = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const Modal = ({
    title,
    root = document.body,
    active = true,
    className,
    children,
    onClose,
    onMinimize,
    ...props
}: Props) => {
    const rootClassName = cn(CSS_GLOBAL_CLASS.BORDER_INSET, css.root, className);
    const titleClassName = cn(css.title, active ? css.active : css.inactive);

    return createPortal(
        <div {...props} className={rootClassName}>
            <div className={titleClassName}>
                {title}

                {onMinimize && (
                    <Button size="s" className={css.icon} onClick={onMinimize}>
                        <Icon name="lodash" size="s" />
                    </Button>
                )}

                {onClose && (
                    <Button size="s" className={css.icon} onClick={onClose}>
                        <Icon name="cross" size="s" />
                    </Button>
                )}
            </div>

            {children}
        </div>,
        root,
    );
};
