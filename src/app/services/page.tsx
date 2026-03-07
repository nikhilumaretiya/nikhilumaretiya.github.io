"use client";

import { motion, Variants } from "framer-motion";
import { FaWordpress, FaLaravel, FaPalette, FaShoppingCart } from "react-icons/fa";

export default function Services() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    };

    return (
        <article className="about active" data-page="services">
            <header>
                <h2 className="h2 article-title mb-6">My Services</h2>
            </header>

            <section>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Service 1 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group relative bg-border-gradient-onyx p-[1px] rounded-2xl h-full"
                    >
                        <div className="absolute inset-0 bg-accent-color/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="bg-accent-color/10 p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(180,100%,65%,0.2)]">
                                <FaWordpress className="text-4xl text-accent-color" />
                            </div>
                            <h4 className="text-xl font-bold text-white-2 mb-4">Vanilla & Custom WordPress</h4>
                            <p className="text-light-gray text-base leading-relaxed">
                                Building blazing-fast, high-performance WordPress sites using modern stacks like Sage 10, Bedrock, and ACF. Clean code, headless API integrations, and SEO-friendly architectures.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group relative bg-border-gradient-onyx p-[1px] rounded-2xl h-full"
                    >
                        <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="bg-purple-500/10 p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                                <FaLaravel className="text-4xl text-purple-400" />
                            </div>
                            <h4 className="text-xl font-bold text-white-2 mb-4">Laravel Web Applications</h4>
                            <p className="text-light-gray text-base leading-relaxed">
                                Developing fully-custom scalable SaaS applications, secure REST & GraphQL APIs, multi-user portals, and deeply customized backend admin dashboards.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group relative bg-border-gradient-onyx p-[1px] rounded-2xl h-full"
                    >
                        <div className="absolute inset-0 bg-[#95bf47]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="bg-[#95bf47]/10 p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(149,191,71,0.2)]">
                                <FaShoppingCart className="text-4xl text-[#95bf47]" />
                            </div>
                            <h4 className="text-xl font-bold text-white-2 mb-4">Shopify Customization</h4>
                            <p className="text-light-gray text-base leading-relaxed">
                                Extending Shopify capabilities through deeply customized Liquid themes, custom OS2.0 sections, App integrations, and conversion rate optimization (CRO) UI tweaks.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 4 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="group relative bg-border-gradient-onyx p-[1px] rounded-2xl h-full"
                    >
                        <div className="absolute inset-0 bg-[#61dafb]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                        <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center">
                            <div className="bg-[#61dafb]/10 p-4 rounded-xl mb-6 shadow-[0_0_20px_rgba(97,218,251,0.2)]">
                                <FaPalette className="text-4xl text-[#61dafb]" />
                            </div>
                            <h4 className="text-xl font-bold text-white-2 mb-4">Modern Frontend Frameworks</h4>
                            <p className="text-light-gray text-base leading-relaxed">
                                Crafting pixel-perfect, mobile-first interactive interfaces utilizing HTML5, Tailwind CSS, Next.js, and Framer Motion to provide native-app-like user experiences.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </article>
    );
}
