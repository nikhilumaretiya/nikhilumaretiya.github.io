'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function Portfolio() {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            title: "Real Estate Theme",
            category: "wordpress",
            img: "/assets/images/portfolio/wp-real-estate.png",
            link: "https://railestatesearch.co.uk",
            tech: ["WordPress", "Sage 10", "Tailwind"]
        },
        {
            title: "WooCommerce Store",
            category: "wordpress",
            img: "/assets/images/portfolio/wp-woocommerce.png",
            link: "https://www.atenlighting.co.uk",
            tech: ["WooCommerce", "PHP", "JS"]
        },
        {
            title: "Sage 10 theme + WooCommerce Store",
            category: "wordpress",
            img: "/assets/images/portfolio/sage-theme-woo.png",
            link: "https://revivelogix.com",
            tech: ["Sage 10", "WooCommerce", "ACF"]
        },
        {
            title: "Custom theme + Multilingual Site",
            category: "wordpress",
            img: "/assets/images/portfolio/custom-theme-multilingual.png",
            link: "https://www.trisura.com",
            tech: ["WordPress", "WPML", "SCSS"]
        },
        {
            title: "CRM Dashboard",
            category: "laravel",
            img: "/assets/images/portfolio/laravel-crm.png",
            link: "https://app.axiompersonnel.co.uk/login",
            tech: ["Laravel", "Vue.js", "MySQL"]
        },
        {
            title: "Inventory Manager (REST API)",
            category: "laravel",
            img: "/assets/images/portfolio/laravel-inventory.png",
            link: "https://quiickmedicine.ca",
            tech: ["Laravel API", "React", "PostgreSQL"]
        },
        {
            title: "Shopify Store",
            category: "shopify",
            img: "/assets/images/portfolio/shopify-theme.png",
            link: "https://pumpingstations.uk",
            tech: ["Shopify Liquid", "HTML/CSS"]
        },
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title mb-8">Portfolio</h2>
            </header>

            <section className="projects">
                {/* Modern Filter Tabs */}
                <ul className="flex flex-wrap gap-4 mb-10 overflow-x-auto pb-2">
                    {['all', 'wordpress', 'laravel', 'shopify'].map((category) => (
                        <li key={category}>
                            <button
                                className={`px-5 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${filter === category
                                        ? 'bg-accent-color text-smoky-black shadow-[0_0_15px_rgba(180,100%,65%,0.3)]'
                                        : 'bg-eerie-black-1 text-light-gray-70 hover:text-accent-color border border-white/5 hover:border-accent-color/30'
                                    }`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Animated Project Grid */}
                <motion.ul
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.li
                                key={project.title + idx}
                                variants={itemVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                layout
                                className="group relative rounded-2xl overflow-hidden bg-bg-gradient-jet border border-white/5 shadow-2"
                            >
                                <a href={project.link} target="_blank" rel="noreferrer" className="block h-full cursor-pointer">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-smoky-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Hover Overlay with Tech Stack */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-smoky-black via-smoky-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                                            <div className="flex flex-wrap gap-2 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-white/10 backdrop-blur-md text-white-1 rounded-md border border-white/20">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 relative z-30 bg-eerie-black-1 group-hover:bg-eerie-black-2 transition-colors duration-300">
                                        <h3 className="text-xl font-bold text-white-2 mb-2 group-hover:text-accent-color transition-colors duration-300">{project.title}</h3>
                                        <p className="text-sm text-light-gray capitalize">{project.category}</p>
                                    </div>
                                </a>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.ul>
            </section>
        </article>
    );
}
