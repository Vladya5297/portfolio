import type {Command} from '../types';
import {key} from '../../utils/key';

export const cd: Command = () => {
    return [
        <span key={key()}>Access denied</span>,
    ];
};
