import {Header} from './components/Header';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <Header />

            <div className={css.content}>
                <h2>
                    Frontend Lead
                    <br />
                    From 2024 until now
                </h2>

                <p>
                    Realizing I had exhausted my potential at Yandex, I transitioned to BestDoctor.
                    The product I worked on focused on selling
                    life insurance products through our partners agents.
                </p>
                <p>
                    When I joined, the project was being managed by an external contractor team.
                    Upon my arrival, I took ownership of the project, quickly acquiring
                    expertise and assuming a significant amount of responsibility due to its
                    technically fragile state (barely at the MVP stage).
                </p>
                <p>
                    My first priority was to consolidate and document the project's existing
                    functionality and the clients development plans. Based on this, I proposed
                    and successfully defended a target architecture.
                </p>
                <p>
                    Alongside fulfilling business requirements, I technically enhanced the
                    project, achieving substantial improvements.
                    Thanks to my efforts, the codebase was reduced threefold by
                    removing dead code, refactoring, and optimizing the business logic.
                    I established and enforced coding style guidelines and implemented
                    a pipeline for automated code checks, significantly improving code quality.
                </p>
                <p>
                    I also standardized project management processes, including review of
                    analytics, collaborative API design, and regular client sync meetings,
                    streamlining communication and ensuring alignment.
                </p>
                <p>
                    When it came time to expand the team, I developed the technical interview
                    section for hiring new employees.
                    I personally conducted numerous interviews, resulting in the addition of
                    two new developers to the team, whom I then managed.
                </p>
                <p>
                    As lead frontend developer, I onboarded and mentored these team members,
                    assisting with requirement analysis, task decomposition, and estimation,
                    while also implementing a robust code review process to ensure
                    code quality and knowledge sharing.
                </p>
                <p>
                    I am proud of the scope and quality of my work at BestDoctor and am seeking
                    a challenging role where I can leverage my leadership and technical
                    expertise to drive innovation and build high-performing frontend teams.
                </p>
            </div>
        </div>
    );
};

export default Content;
