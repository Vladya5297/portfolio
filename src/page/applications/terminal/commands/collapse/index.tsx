import {useFullscreen} from '~/page/components/Fullscreen';

import type {Command} from '../types';
import {key} from '../../utils/key';

import {Collapse} from './Collapse';

const Answer = () => {
    useFullscreen(<Collapse />);

    return <span>What have you done...</span>;
};

export const collapse: Command = () => {
    return [<Answer key={key()} />];
};
