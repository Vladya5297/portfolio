import type {ComponentType} from 'react';

export type LazyComponent = () => Promise<{default: ComponentType<any>}>;
