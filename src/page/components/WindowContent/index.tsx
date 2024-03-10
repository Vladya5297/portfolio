import React, {Suspense} from 'react';
import cn from 'classnames';

import {CSS_GLOBAL_CLASS} from '~/components/styles';

import css from './style.m.css';
import {Loader} from './Loader';
import {useContent} from './utils';
import type {LazyComponent} from './types';

export * from './utils';

type Props = {
    content: LazyComponent;
};

export const WindowContent = React.memo(
    function WindowContent({content}: Props) {
        const className = cn(
            CSS_GLOBAL_CLASS.BORDER_INSET,
            css.wrapper,
        );

        const Component = useContent(content);

        return (
            <div className={className}>
                <Suspense fallback={<Loader />}>
                    <Component />
                </Suspense>
            </div>
        );
    },
);
