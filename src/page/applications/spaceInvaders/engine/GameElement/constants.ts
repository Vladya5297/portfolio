import type {Style} from './types';

export const DEFAULT_STYLE: Style = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    color: 'black',
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: 1,
    textAlign: 'center',
    textBaseline: 'middle',
    fitText: true,
} as const;
