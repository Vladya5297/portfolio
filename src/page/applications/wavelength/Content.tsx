import {Header} from './components/Header';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <Header />

            <div className={css.content}>
                <h2>
                    Pet project
                </h2>
                <p>
                    Once during one of the gatherings with friends, we played the tabletop
                    game "Wavelength". I was very inspired, and right during the game, an
                    idea struck me that it would be very convenient to have a web version.
                    With hope, I turned to the search, but as it turned out, there was no
                    possibility to play remotely. Immediately, I started working on it,
                    and within two weeks, I had a working prototype. In a short amount
                    of time after that, I made it possible to play comfortably from a smartphone.
                </p>
                <p>
                    Despite the fact that the project is definitely not perfect and has
                    many areas for improvement, I am still proud of it. Working on this
                    game was a real pleasure. And even more delightful emotions I experienced
                    when my friends and I were able to finally play my creation.
                </p>
                <p>
                    Since then, I occasionally use this game to entertain new acquaintances.
                    You can check it out at the link below.
                </p>
                <p>
                    (P.S. It is a multiplayer game, so it's better to open
                    it in multiple tabs for a complete experience.)
                </p>
                <p>
                    (P.S.S. The game is hosted on a free hosting platform,
                    so it may take some time to load.)
                </p>

                <a href="https://wavelength-game.glitch.me/" target="_blank" rel="noreferrer">Link</a>
            </div>
        </div>
    );
};

export default Content;
