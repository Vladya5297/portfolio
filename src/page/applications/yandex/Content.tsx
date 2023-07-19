import {Header} from './components/Header';
import css from './style.m.css';

const Content = () => {
    return (
        <div className={css.root}>
            <Header />

            <div className={css.content}>
                <h2>
                    Frontend Developer
                    <br />
                    From 2021 until now
                </h2>
                <p>
                    After leaving Kaspersky, I joined Yandex. When I received the offer,
                    they suggested I go through a bootcamp, which is like a trial period where
                    I work in different teams for a short period of time. This led me to work
                    in the Yandex.Market B2C development team, the infrastructure team, and the
                    Yandex.Market B2B team. Eventually, I decided to stick with the B2B team,
                    and I continue to work with them to this day.
                </p>
                <p>
                    Even during the bootcamp, I made valuable contributions to the team's
                    development processes. I saw an opportunity for improvement in code reviews
                    and shared my experiences and useful practices through public presentations.
                    One of the things I introduced was the conventional comments
                    methodology which I implemented as a browser extension for our
                    internal version control system.
                </p>
                <p>
                    In my current team, I've also made significant contributions to various
                    projects. My experience helped me improve the internal UI system, and
                    I introduced many new reusable components with user-friendly APIs.
                    I spent a lot of time optimizing the webpack configuration, which reduced
                    the build time from 13 minutes to 1.5 minutes. Additionally, I participated
                    in the implementation of Storybook and wrote pages for individual components.
                </p>
                <p>
                    I was responsible for managing numerous projects of varying scale,
                    including the creation of entirely new pages with their own architecture
                    and logic. As part of these projects, I improved the internal tool for
                    experiment verification, which allowed us to enable functionality for
                    specific users based on lists or percentages.
                </p>
                <p>
                    Regarding release deployments, each week a designated person is responsible
                    for it. During this process, I improved the existing documentation and brought
                    attention to outdated practices related to the release process. These changes
                    helped my colleagues spend less time preparing releases and feel more
                    confident during their first duty.
                </p>
                <p>
                    On one of the pages our team is responsible for, I conducted a
                    significant refactoring. I untangled a complex web of combinations and
                    exceptions, established a clear file structure, visualized and documented
                    the state tree, and covered it with screenshot tests. This reduced the workload
                    for my colleagues on that part of the code from several days to just one hour.
                </p>
                <p>
                    Here are some testimonials from my colleagues:
                </p>
                <blockquote>
                    Vlad writes excellent code. It is clear, pleasant to read, and easy to maintain
                    in the future. He pays attention to details, understands and traces business
                    logic well. He listens and is attentive, suggesting solutions where necessary.
                    He can work independently.
                </blockquote>
                <blockquote>
                    Vlad is an excellent professional. He always fulfills tasks promptly and
                    impartially, with high-quality results. I consider his code quality to be
                    exemplary. I can't comprehend how he manages to do things both
                    quickly and so well!
                </blockquote>
                <blockquote>
                    Vlad is like a well-calibrated mechanism: precise,
                    efficient, and with excellent performance.
                </blockquote>
                <blockquote>
                    I believe Vlad had a good share of challenging projects during this half-year,
                    and he handled them excellently. For instance, the resales in refunds - Vlad
                    had to deal with complex catalog page code (he's a true hero).
                </blockquote>
                <blockquote>
                    Vlad is very independent. If you assign him a project, you can be confident
                    that he will complete it. He immerses himself in projects and understands
                    them well. He thinks ahead (before testing) about potential issues.
                    Excellent work!
                </blockquote>
            </div>
        </div>
    );
};

export default Content;
