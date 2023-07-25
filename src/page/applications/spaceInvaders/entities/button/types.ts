import type {TextStyle} from '../text/types';

export type ButtonStyle = {
    backgroundColor: string;
    borderWidth: number;
    borderColor: string;
} & Omit<TextStyle, 'textAlign'>;
