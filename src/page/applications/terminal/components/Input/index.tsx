import {useEffect} from 'react';
import type {MutableRefObject} from 'react';

import {onKeyDown} from '~/utils/dom';
import {useElement} from '~/utils/useElement';
import {KEYBOARD_KEY} from '~/constants/keyboard';

import css from './style.m.css';

type Props = {
    onSubmit: (value: string) => void;
    _ref: MutableRefObject<HTMLInputElement | null>;
};

export const Input = ({onSubmit, _ref}: Props) => {
    const input = useElement(_ref);

    // Autofocus
    useEffect(() => {
        if (!input) return;
        input.focus();
    }, [input]);

    // Submit handler
    useEffect(() => {
        if (!input) return;

        const handler = () => {
            onSubmit(input.value);
            input.value = '';
        };

        return onKeyDown(KEYBOARD_KEY.ENTER, handler, {target: input});
    }, [input, onSubmit]);

    return <input ref={_ref} type="text" className={css.input} />;
};
