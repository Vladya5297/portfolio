import {Header} from './components/Header';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <Header />

            Hello and welcome to my personal website! Here you can explore my experience,
            career path, and technologies I master. If you like what you see, feel
            free to get in touch with me. I'll be glad to discuss job opportunities,
            answer any questions, and simply have a conversation!
        </div>
    );
};

export default Content;
