import {Image} from '~/components/Image';

import {Header} from './components/Header';
import photo1 from './assets/20.11.2018.png';
import photo2 from './assets/27.12.2018.png';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <Header />

            <h2>
                Student Project Lead
                <br />
                Winter 2018
            </h2>
            <p>
                While I was a student, I participated in an IT project competition
                organized by the company Croc. As part of a team, our task was to implement
                a project that solved a real problem for the company.
            </p>
            <p>
                Together with the team, I worked on a project that helped project managers
                brainstorm and organize their ideas effectively. We developed a web application
                that served as a virtual sticky note board with thematic areas.
                The content from these sticky notes was summarized and transformed
                into a presentation. This way, it became convenient to assess the pros and cons
                of the ideas and present them to colleagues.
            </p>
            <Image {...photo1} maxWidth={400} alt="team work" />
            <h2>
                Contribution
            </h2>
            <p>
                Working on this project provided me with valuable experience in managing
                a small team of developers. I implemented working processes that allowed us
                to collectively contribute to the project's development regularly. To facilitate
                development, I helped my colleagues understand the basics of team collaboration
                and organized the necessary tools.
            </p>
            <p>
                Thanks to a well-planned architecture, we could quickly implement customer feedback
                without compromising the product's quality. We used libraries like
                react-dnd and d3-zoom for interactive interaction with the virtual board.
            </p>
            <Image {...photo2} maxWidth={400} alt="defense of the project" />
            <h2>
                Results
            </h2>
            <p>
                In the end, we successfully defended the prototype of our project and obtained
                a contract to complete and deliver it to the customer. Additionally, I was offered
                a frontend developer position, which I had to decline to focus on
                finishing my studies at the university.
            </p>
        </div>
    );
};

export default Content;
