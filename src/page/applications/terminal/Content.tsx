import type {ReactNode} from 'react';
import {useEffect, useRef, useState} from 'react';

import {run} from './commands';
import {Input} from './components/Input';
import css from './style.m.css';
import {CLEAR, PATH} from './constants';
import {key} from './utils/key';

const Content = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [history, setHistory] = useState<ReactNode[]>([]);

    const onSubmit = (value: string) => {
        const [input] = value.split(' ');
        if (input === CLEAR) {
            setHistory([]);
            return;
        }

        const result = run(value);
        const command = (
            <span key={key()}>
                {PATH}
                {value}
            </span>
        );

        setHistory(current => [
            ...current,
            command,
            ...result,
        ]);
    };

    // Capture focus
    const onClick = () => {
        ref.current?.focus();
    };

    // Keep input visible
    useEffect(() => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }, [history]);

    return (
        <div className={css.root} onClick={onClick}>
            <span>Call "help" to see all available commands</span>

            {history}

            <span>
                {PATH}
                <Input onSubmit={onSubmit} _ref={ref} />
            </span>
        </div>
    );
};

export default Content;
