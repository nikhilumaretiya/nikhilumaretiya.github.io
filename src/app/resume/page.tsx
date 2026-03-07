export default function Resume() {
    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" /></svg>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item reveal active">
                        <h4 className="h4 timeline-item-title">Professional Freelancer</h4>
                        <span>Jul 2020 - Present · 5 yrs 1 mo</span>
                        <p className="timeline-text">
                            Working independently with global clients on full-stack projects using PHP, Laravel,
                            WordPress (Sage
                            10 + Bedrock), and Shopify. Delivered custom themes, SaaS platforms, WooCommerce
                            integrations, and
                            performance-optimized websites. Collaborated with cross-functional teams to ensure
                            client satisfaction
                            and business alignment.
                        </p>
                    </li>

                    <li className="timeline-item reveal active">
                        <h4 className="h4 timeline-item-title">PHP Web Developer</h4>
                        <span>Jan 2021 - Jul 2022 · 1 yr 7 mos</span>
                        <p className="timeline-text">
                            Developed and maintained enterprise web applications using PHP, MySQL, and MVC
                            frameworks. Integrated
                            APIs, built admin dashboards, and worked on optimizing codebases for speed and
                            scalability.
                        </p>
                    </li>

                    <li className="timeline-item reveal active">
                        <h4 className="h4 timeline-item-title">Trainee</h4>
                        <span>Apr 2018 - Jul 2018 · 4 mos</span>
                        <p className="timeline-text">
                            Completed hands-on training in core PHP, HTML/CSS, JavaScript, and MySQL. Built basic
                            CMS, CRUD
                            operations, and responsive layouts during internship with live deployment experience.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card reveal active">
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">PHP & Laravel</h5>
                            <data value="90">90%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">WordPress (Sage 10 + ACF)</h5>
                            <data value="95">95%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "95%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">WooCommerce & Shopify</h5>
                            <data value="85">85%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "85%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Next.js & React</h5>
                            <data value="80">80%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Git & Deployment</h5>
                            <data value="75">75%</data>
                        </div>
                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "75%" }}></div>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    );
}
