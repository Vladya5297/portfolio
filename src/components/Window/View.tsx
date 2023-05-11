import cn from 'classnames';
import type {ReactNode, HTMLAttributes} from 'react';

import {Button} from '../Button';
import {Icon} from '../Icon';
import {CSS_GLOBAL_CLASS} from '../styles';

import css from './style.css';

type CustomProps = {
    title: ReactNode;
    image: string;
    active?: boolean;
    onClose?: () => void;
    onMinimize?: () => void;
};

type DefaultProps = HTMLAttributes<HTMLDivElement>;

export type ViewProps = CustomProps & Omit<DefaultProps, keyof CustomProps>;

export const View = ({
    title,
    image,
    active = true,
    className,
    children,
    onClose,
    onMinimize,
    ...props
}: ViewProps) => {
    const rootClassName = cn(CSS_GLOBAL_CLASS.BORDER_INSET, css.root, className);
    const titleClassName = cn(css.title, active ? css.active : css.inactive);

    return (
        <div {...props} className={rootClassName}>
            <div className={titleClassName}>
                <div className={css.label}>
                    <img src={image} width={16} height={16} alt="" />

                    {title}
                </div>

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
        </div>
    );
};
