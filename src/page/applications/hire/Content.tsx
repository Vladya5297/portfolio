import {useState} from 'react';

import css from './style.m.css';
import {Loader} from './components/Loader';

const Content = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className={css.root}>
            {loading && <Loader />}

            <iframe
                title="contact form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScsfJkc5pHuuelMzMwBGjOnqlQAhZw9ArhTdC5113bouf-PIg/viewform?embedded=true&hl=en"
                className={css.content}
                onLoad={() => setLoading(false)}
            />
        </div>
    );
};

export default Content;
