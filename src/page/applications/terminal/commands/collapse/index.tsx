import {useEffect} from 'react';

import {fullscreenAtom} from '~/constants/atoms';

import {key} from '../../utils/key';
import type {Command} from '../types';

import {Collapse} from './Collapse';

const Answer = () => {
    useEffect(() => {
        fullscreenAtom.setValue(<Collapse />);
    }, []);

    return <span>What have you done...</span>;
};

export const collapse: Command = () => {
    return [<Answer key={key()} />];
};
