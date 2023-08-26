import {useEffect} from 'react';
import type {MutableRefObject} from 'react';

import {onKeyDown} from '~/utils/dom';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import css from './style.m.css';

type Props = {
    onSubmit: (value: string) => void;
    _ref: MutableRefObject<HTMLInputElement | null>;
};

export const Input = ({onSubmit, _ref}: Props) => {
    // Autofocus
    useEffect(() => {
        const input = _ref.current;
        if (!input) return;
        input.focus();
    }, []);

    // Submit handler
    useEffect(() => {
        const input = _ref.current;
        if (!input) return;

        const handler = () => {
            onSubmit(input.value);
            input.value = '';
        };

        return onKeyDown(KEYBOARD_KEY.ENTER, handler, {target: input});
    }, [onSubmit]);

    return <input ref={_ref} type="text" autoCapitalize="off" className={css.input} />;
};
