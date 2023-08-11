import type {ReactNode} from 'react';

export type Command = (...args: any[]) => ReactNode[];
