'use client';

import { motion, Variants } from 'framer-motion';

export default function Resume() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
    };

    const progressVariants: Variants = {
        hidden: { width: 0 },
        show: (width: string) => ({
            width,
            transition: { duration: 1, ease: "easeOut", delay: 0.5 }
        })
    };

    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="h2 article-title mb-8">Resume</h2>
            </header>

            <section className="mb-14">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-bg-gradient-jet p-3 rounded-xl shadow-1 border border-white/5 text-accent-color">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" /></svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white-2">Experience</h3>
                </div>

                <motion.div
                    className="relative pl-8 md:pl-10 before:absolute before:left-[11px] md:before:left-[19px] before:top-2 before:bottom-0 before:w-[2px] before:bg-white/10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Timeline Item 1 */}
                    <motion.div variants={itemVariants} className="relative mb-10 last:mb-0">
                        <span className="absolute -left-[37px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-bg-gradient-jet border-2 border-accent-color shadow-[0_0_10px_rgba(180,100%,65%,0.5)] z-10" />
                        <h4 className="text-lg font-bold text-white-2 mb-1">Professional Freelancer</h4>
                        <span className="inline-block text-accent-color text-sm font-medium bg-accent-color/10 px-3 py-1 rounded-md mb-3">Jul 2020 - Present</span>
                        <p className="text-light-gray leading-relaxed text-sm md:text-base">
                            Working independently with global clients on full-stack projects using PHP, Laravel,
                            WordPress (Sage 10 + Bedrock), and Shopify. Delivered custom themes, SaaS platforms, WooCommerce integrations, and performance-optimized websites.
                        </p>
                    </motion.div>

                    {/* Timeline Item 2 */}
                    <motion.div variants={itemVariants} className="relative mb-10 last:mb-0">
                        <span className="absolute -left-[37px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-bg-gradient-jet border-2 border-white/20 z-10 hover:border-accent-color transition-colors duration-300" />
                        <h4 className="text-lg font-bold text-white-2 mb-1">PHP Web Developer</h4>
                        <span className="inline-block text-white-1 text-sm font-medium bg-white/5 px-3 py-1 rounded-md mb-3">Jan 2021 - Jul 2022</span>
                        <p className="text-light-gray leading-relaxed text-sm md:text-base">
                            Developed and maintained enterprise web applications using PHP, MySQL, and MVC
                            frameworks. Integrated APIs, built admin dashboards, and worked on optimizing codebases for speed and scalability.
                        </p>
                    </motion.div>

                    {/* Timeline Item 3 */}
                    <motion.div variants={itemVariants} className="relative mb-10 last:mb-0">
                        <span className="absolute -left-[37px] md:-left-[45px] top-2 w-4 h-4 rounded-full bg-bg-gradient-jet border-2 border-white/20 z-10 hover:border-accent-color transition-colors duration-300" />
                        <h4 className="text-lg font-bold text-white-2 mb-1">Trainee Developer</h4>
                        <span className="inline-block text-white-1 text-sm font-medium bg-white/5 px-3 py-1 rounded-md mb-3">Apr 2018 - Jul 2018</span>
                        <p className="text-light-gray leading-relaxed text-sm md:text-base">
                            Completed hands-on training in core PHP, HTML/CSS, JavaScript, and MySQL. Built basic
                            CMS, CRUD operations, and responsive layouts during internship with live deployment experience.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="mb-8">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-2xl font-semibold text-white-2 flex-grow">My Skills</h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>

                <div className="bg-bg-gradient-jet p-6 md:p-8 rounded-2xl border border-white/5 shadow-1">
                    <ul className="flex flex-col gap-6">
                        {[
                            { name: "PHP & Laravel", val: "90%" },
                            { name: "WordPress (Sage 10 + ACF)", val: "95%" },
                            { name: "WooCommerce & Shopify", val: "85%" },
                            { name: "Next.js & React", val: "80%" },
                            { name: "Full-Stack Deployment", val: "85%" }
                        ].map((skill, index) => (
                            <li key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <h5 className="text-sm font-medium text-white-2">{skill.name}</h5>
                                    <data className="text-sm font-light text-light-gray">{skill.val}</data>
                                </div>
                                <div className="h-2 w-full bg-eerie-black-2 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-accent-color to-purple-500 rounded-full"
                                        custom={skill.val}
                                        variants={progressVariants}
                                        initial="hidden"
                                        animate="show"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </article>
    );
}
