import {Header} from './components/Header';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <div className={css.background} />

            <Header />

            <h2>
                Intern Developer
                <br />
                From 2019 to summer 2021
            </h2>
            <p>
                During my third year of university, I managed to win a qualifying
                competition and got a position as an intern front-end developer
                at Kaspersky, starting from summer 2019.
                I worked part-time so that I could balance it with my studies.
            </p>
            <p>
                I was part of a team working on the "Security Center Web Console" project.
                This web application was designed to monitor the security status of networks
                protected by Kaspersky Lab's software within an organization.
                My tasks involved fixing existing bugs and working on the
                development of new features.
            </p>
            <h2>
                Technologies
            </h2>
            <p>
                When I joined the project, it was using an outdated technology stack.
                The main UI library was Riot.js, and as application's state
                management system there was an internal tool. However, collectively,
                we were able to contribute to the migration of the application to React
                with Redux. With my experience developing my own pet projects with React,
                I assisted my colleagues in quickly grasping the fundamentals of these new
                tools and wrote documentation describing best practices.
            </p>
            <h2>
                Main projects
            </h2>
            <p>
                For interface creation in the application, we used a custom WYSIWYG editor.
                One of my significant projects involved migrating this tool to React and
                enabling the addition of custom components through a graphical interface.
                This required restructuring the architecture and Webpack build configurations.
                I incrementally integrated React without compromising the functionality of the tool.
            </p>
            <p>
                Another interesting task was creating a Docker container to run tests for
                each branch merge into the master branch. As part of the transition
                to a modern stack, we introduced styled-components and Ant Design.
                I actively participated in adapting these tools to suit our project's needs.
            </p>
            <h2>
                Summary
            </h2>
            <p>
                As a result of my work here, I managed to significantly improve codebase quality,
                rebuild the tool for productive work of several teams, helped to
                enhance work processes, and as a bonus for myself, I've got a lot of useful
                skills and had a lot of joyful time with my colleagues.
            </p>
        </div>
    );
};

export default Content;
