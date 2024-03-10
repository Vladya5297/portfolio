import React, {Suspense} from 'react';
import type {ReactNode} from 'react';
import cn from 'classnames';

import {CSS_GLOBAL_CLASS} from '~/components/styles';

import css from './style.m.css';
import {Loader} from './Loader';

export * from './utils';

type Props = {
    children: ReactNode;
};

/**
 * Provides correct view and lazy loading of window content.
 * @example
 * const Content = lazyContent(() => import('./Content'));
 *
 * const Component = () => (
 *    <WindowContent>
 *        <Content />
 *    </WindowContent>
 * )
 */
export const WindowContent = React.memo(
    function WindowContent({children}: Props) {
        const className = cn(
            CSS_GLOBAL_CLASS.BORDER_INSET,
            css.wrapper,
        );

        return (
            <div className={className}>
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            </div>
        );
    },
);
