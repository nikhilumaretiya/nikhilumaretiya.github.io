'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const categories = ['all', 'wordpress', 'laravel', 'shopify'];

const projects = [
    {
        title: "Real Estate Search Engine",
        category: "wordpress",
        img: "/assets/images/portfolio/wp-real-estate.png",
        link: "https://railestatesearch.co.uk",
        github: "#",
        tech: ["Sage 10", "Tailwind", "REST API", "Vite"],
        problem: "Legacy real estate site had extremely slow property filtering and poor SEO structure.",
        solution: "Built a custom Roots Sage 10 theme with optimized SQL queries and a decoupled property search API.",
        result: "Reduced property search latency by 70% and achieved a perfect 100/100 Lighthouse SEO score."
    },
    {
        title: "Aten Lighting E-commerce",
        category: "wordpress",
        img: "/assets/images/portfolio/wp-woocommerce.png",
        link: "https://www.atenlighting.co.uk",
        github: "#",
        tech: ["WooCommerce", "PHP", "Sage 10", "SQL"],
        problem: "Complex lighting product variations were causing significant friction at the checkout stage.",
        solution: "Implemented custom WooCommerce checkout logic and a bespoke variation selector for easier navigation.",
        result: "Resulted in a 20% increase in average basket value and smoother user checkout flow."
    },
    {
        title: "ReviveLogix Corporate",
        category: "wordpress",
        img: "/assets/images/portfolio/sage-theme-woo.png",
        link: "https://revivelogix.com",
        github: "#",
        tech: ["Sage 10", "WooCommerce", "ACF Pro", "Vite"],
        problem: "The client needed a modern site that could scale digital service sales without the bloat of standard themes.",
        solution: "Developed an ultra-lightweight theme using Bedrock and Sage 10, strictly following DRY principles.",
        result: "Achieved 95+ Core Web Vitals and a maintenance-free technical architecture."
    },
    {
        title: "Trisura International",
        category: "wordpress",
        img: "/assets/images/portfolio/custom-theme-multilingual.png",
        link: "https://www.trisura.com",
        github: "#",
        tech: ["WordPress", "WPML", "SCSS", "BEM"],
        problem: "Large-scale corporate site with complex multilingual requirements and fragmented content management.",
        solution: "Built global block libraries and deep WPML integration to manage content across 5+ languages seamlessly.",
        result: "Reduced content update time by 60% across the entire international property portfolio."
    },
    {
        title: "Axiom Personnel CRM",
        category: "laravel",
        img: "/assets/images/portfolio/laravel-crm.png",
        link: "https://app.axiompersonnel.co.uk/login",
        github: "#",
        tech: ["Laravel 10", "Vue.js 3", "MySQL", "Tailwind"],
        problem: "Recruitment team was struggling with a legacy spreadsheet system that caused candidate data fragmentation.",
        solution: "Engineered a custom Laravel CRM with centralized candidate tracking and automated placement workflows.",
        result: "Improved recruitment team efficiency by 40% and eliminated duplicate candidate entries."
    },
    {
        title: "Quiick Medicine Hub",
        category: "laravel",
        img: "/assets/images/portfolio/laravel-inventory.png",
        link: "https://quiickmedicine.ca",
        github: "#",
        tech: ["Laravel API", "React", "PostgreSQL", "Stripe"],
        problem: "Medical stock mismatches across locations were causing critical inventory shortages.",
        solution: "Built a headless inventory platform with real-time sync between the Laravel API and React dashboard.",
        result: "Reduced inventory discrepancies by 98% and improved stock reporting speed by 4x."
    },
    {
        title: "Pumping Stations UK",
        category: "shopify",
        img: "/assets/images/portfolio/shopify-theme.png",
        link: "https://pumpingstations.uk",
        github: "#",
        tech: ["Shopify Liquid", "JavaScript", "Schema API"],
        problem: "Off-the-shelf Shopify theme couldn't handle the technical specification filters needed for industrial pumps.",
        solution: "Developed a bespoke Shopify 2.0 theme with custom Metafields and advanced product filtering logic.",
        result: "Decreased bounce rate on product pages by 35% within the first two months."
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as any },
    },
};

export default function ProjectsClient() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="flex flex-col pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
            <header className="space-y-6">
                <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-tighter leading-tight">Proof of <span className="text-primary italic">Performance.</span></h1>
                <div className="h-2 w-24 bg-primary rounded-full shadow-lg shadow-primary/20" />
                <p className="text-[17px] text-muted-foreground font-light max-w-2xl leading-relaxed">
                    A collection of high-scale systems built for performance, growth, and <span className="text-foreground font-medium border-b-2 border-primary/20">technical excellence</span>.
                </p>
            </header>

            {/* Modern Filter Navigation */}
            <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-2xl border border-border">
                    <Filter size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground pr-2 border-r border-border">Filter:</span>
                    <div className="flex gap-1 pl-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                aria-pressed={filter === cat}
                                className={cn(
                                    "px-4 py-1.5 rounded-xl text-sm font-medium capitalize transition-all",
                                    filter === cat
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "hover:bg-foreground/5 text-muted-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            layout
                            key={project.title}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                            </div>

                            {/* Content Container */}
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-[20px] font-bold tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            className="p-2 rounded-full hover:bg-foreground/5 text-muted-foreground transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View source code for ${project.title} on GitHub`}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.link}
                                            className="p-2 rounded-full hover:bg-foreground/5 text-muted-foreground transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit live site for ${project.title}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-6 text-[15px] leading-relaxed mb-6 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4 w-fit mx-auto md:mx-0">
                                        <span className="text-[14px] font-bold uppercase tracking-widest">{project.category}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground"><span className="text-foreground font-bold block mb-1">The Problem:</span> {project.problem}</p>
                                    <p className="text-muted-foreground"><span className="text-foreground font-bold block mb-1">The Solution:</span> {project.solution}</p>
                                    <div className="pt-4 border-t border-border/40">
                                        <p className="text-primary font-bold italic">
                                            "Result: {project.result}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
