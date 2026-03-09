'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight,
    Code2,
    Zap,
    CheckCircle2,
    Star,
    Activity
} from 'lucide-react';
import {
    SiPhp, SiLaravel, SiWordpress, SiShopify,
    SiReact, SiNextdotjs, SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { TechIllustration } from './components/TechIllustration';

// Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
};

// Data
const stats = [
    { label: 'Years Experience', value: '7+', icon: Activity },
    { label: 'Projects Delivered', value: '50+', icon: CheckCircle2 },
    { label: 'Lighthouse Performance', value: '95+', icon: Zap },
];

const projects = [
    {
        title: "Enterprise Inventory System",
        tech: ["Laravel", "MySQL", "AWS"],
        problem: "Global warehouses had frequent stock mismatches and slow manual reporting.",
        solution: "Built a Laravel-based tracking system with real-time sync and automated auditing.",
        result: "Reduced stock discrepancies by 98% and improved reporting speed by 4x.",
        image: <SiLaravel className="w-12 h-12 text-[#ff2d20]/40" aria-hidden="true" />,
        color: "from-blue-500/20 to-emerald-500/20"
    },
    {
        title: "Eco-Friendly Marketplace",
        tech: ["WordPress", "Sage 10", "WooCommerce"],
        problem: "Legacy site was too slow for mobile users, resulting in high bounce rates.",
        solution: "Transitioned to a headless architecture using Sage 10 and Bedrock for peak performance.",
        result: "Achieved 500ms page loads and a 25% increase in mobile engagement.",
        image: <SiWordpress className="w-12 h-12 text-[#21759b]/40" aria-hidden="true" />,
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "SaaS Analytics Dashboard",
        tech: ["React", "Next.js", "Tailwind"],
        problem: "Data visualization was laggy and difficult to interpret for non-technical users.",
        solution: "Developed a custom React dashboard with interactive charts and optimized state management.",
        result: "Real-time sync for 10k+ users with zero performance degradation.",
        image: <SiNextdotjs className="w-12 h-12 text-primary/40" aria-hidden="true" />,
        color: "from-violet-500/20 to-primary/20"
    },
    {
        title: "Luxury Fashion Store",
        tech: ["Shopify", "Liquid", "JS"],
        problem: "Standard theme was generic and didn't reflect the brand's premium identity.",
        solution: "Built a bespoke Shopify theme with custom Liquid modules and high-end animations.",
        result: "40% increase in conversion rate within the first quarter after launch.",
        image: <SiShopify className="w-12 h-12 text-[#95bf47]/40" aria-hidden="true" />,
        color: "from-pink-500/20 to-violet-500/20"
    }
];

const services = [
    {
        title: "WordPress Development",
        desc: "Custom WordPress themes using Sage, Bedrock, and ACF for enterprise-grade performance.",
        icon: SiWordpress,
        tags: ["Sage", "Bedrock", "ACF", "WooCommerce"]
    },
    {
        title: "Laravel Development",
        desc: "Building custom dashboards, robust APIs, and scalable backend applications.",
        icon: SiLaravel,
        tags: ["REST APIs", "Livewire", "Filament", "Forge"]
    },
    {
        title: "Shopify Development",
        desc: "Handcrafted Shopify themes and performance-led e-commerce optimization.",
        icon: SiShopify,
        tags: ["Liquid", "Hydrogen", "Custom Apps"]
    },
    {
        title: "Performance Optimization",
        desc: "Deep technical audits to improve site speed and achieve 95+ Lighthouse scores.",
        icon: Zap,
        tags: ["Core Web Vitals", "Caching", "CDN"]
    }
];

const techStack = [
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "WordPress", icon: SiWordpress },
    { name: "Shopify", icon: SiShopify },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "AWS", icon: FaAws }
];

export default function HomeClient() {
    return (
        <div className="flex flex-col">
            {/* 1. Hero Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 md:py-16 overflow-hidden"
            >
                {/* Hero Glow Effect */}
                <div className="absolute inset-0 hero-glow -z-10" aria-hidden="true" />

                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" aria-hidden="true" />
                <motion.div variants={itemVariants} className="mb-8">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Currently Available for Freelance Projects
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-[-0.03em] mb-8 leading-[1.1] max-w-4xl mx-auto font-space"
                >
                    WordPress & Laravel Developer <br />
                    <span className="text-primary italic">Building High-Performance Websites</span><span className="text-primary">.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-[17px] text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    I help businesses build <span className="text-foreground font-medium font-space">fast, scalable, and SEO-optimized</span> websites using <span className="text-foreground font-medium font-space">WordPress (Sage), Laravel, and Shopify</span>.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center mb-16">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center justify-center gap-3 px-10 py-5 glass text-foreground font-bold rounded-2xl hover:bg-foreground/5 transition-all text-lg"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 btn-emerald text-emerald-foreground font-bold rounded-2xl text-lg hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Start a Project <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-black uppercase tracking-[0.2em] opacity-40"
                    aria-label="Experience highlights"
                >
                    <span>7+ Years Experience</span>
                    <span className="hidden sm:inline-block w-1 h-1 bg-foreground rounded-full opacity-25" aria-hidden="true" />
                    <span>50+ Projects Delivered</span>
                    <span className="hidden sm:inline-block w-1 h-1 bg-foreground rounded-full opacity-25" aria-hidden="true" />
                    <span>International Clients</span>
                </motion.div>
            </motion.section>

            {/* 2. Stats Section */}
            <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto w-full" aria-label="Statistics">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center group"
                        >
                            <div className="p-4 rounded-2xl bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                                <stat.icon size={32} className="text-primary" aria-hidden="true" />
                            </div>
                            <h2 className="text-5xl font-black mb-2 tracking-tighter text-primary">{stat.value}</h2>
                            <p className="text-sm font-black text-muted-foreground uppercase tracking-widest leading-none mt-2">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Featured Projects Section */}
            <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto w-full space-y-16" aria-labelledby="featured-projects-title">
                <div className="text-center space-y-4">
                    <h2 id="featured-projects-title" className="text-4xl md:text-6xl font-black tracking-tighter italic text-foreground"><span className="text-primary not-italic">Featured</span> Projects</h2>
                    <div className="h-2 w-24 bg-primary rounded-full mx-auto" aria-hidden="true" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group relative p-1 rounded-[3rem] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className={cn("relative h-80 w-full rounded-[2.8rem] overflow-hidden transition-all duration-500", project.color)}>
                                <div className="absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-60 transition-opacity duration-700" aria-hidden="true" />
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                    <div className="w-4/5 h-4/5 bg-background/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-3xl flex flex-col items-center justify-center gap-6 group-hover:bg-background/60 transition-colors">
                                        {project.image}
                                        <span className="text-xs font-black uppercase text-center tracking-[0.3em] opacity-40">Development Architecture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-10 space-y-6 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4 w-fit mx-auto md:mx-0">
                                    <Star size={14} className="fill-primary" aria-hidden="true" />
                                    <span className="text-[14px] font-bold uppercase tracking-widest">Case Study</span>
                                </div>
                                <h3 className="text-[20px] font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-4 text-[15px] leading-relaxed">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground"><span className="text-foreground font-bold">The Problem:</span> {project.problem}</p>
                                    <p className="text-muted-foreground"><span className="text-foreground font-bold">The Solution:</span> {project.solution}</p>
                                    <div className="pt-2">
                                        <p className="text-primary font-bold border-l-2 border-primary/20 pl-4 py-1 italic">
                                            "Result: {project.result}"
                                        </p>
                                    </div>
                                </div>

                                <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:underline underline-offset-8 transition-all pt-4">
                                    View Full Case Study <ArrowRight size={14} aria-hidden="true" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. Services Section */}
            <section className="px-0 md:px-4 py-12 md:py-16 max-w-7xl mx-auto w-full" aria-labelledby="expertise-title">
                <div className="bg-foreground/5 md:rounded-[4rem] py-12 px-4 md:px-4">
                    <div className="text-center mb-20 space-y-4 px-4">
                        <h2 id="expertise-title" className="text-4xl md:text-6xl font-black tracking-tighter">My <span className="text-primary italic">Expertise.</span></h2>
                        <p className="text-muted-foreground text-xl font-light">Comprehensive development solutions built for agencies and startups.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="p-8 rounded-[2.5rem] bg-background shadow-xl border border-border/50 space-y-6 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <service.icon size={24} aria-hidden="true" />
                                </div>
                                <h3 className="text-[20px] font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-[17px] font-light leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-black uppercase tracking-wider text-primary/70 bg-primary/5 px-2 py-1 rounded-lg border border-primary/10">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Tech Stack Section */}
            <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto w-full space-y-16" aria-labelledby="tech-stack-title">
                <div className="text-center space-y-4">
                    <h2 id="tech-stack-title" className="text-3xl font-black uppercase tracking-[0.3em] opacity-40">The Technology Stack</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {techStack.map(tech => (
                        <div key={tech.name} className="p-8 glass rounded-[2rem] flex flex-col items-center gap-4 hover:border-primary/50 transition-all group cursor-default border border-transparent">
                            <tech.icon size={32} className="text-primary/40 group-hover:text-primary transition-colors" aria-hidden="true" />
                            <span className="font-black uppercase tracking-widest text-[10px]">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5.5 About Me Section (Integrated) */}
            <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto w-full" aria-labelledby="tech-expertise-title">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <header className="space-y-6">
                            <h2 id="tech-expertise-title" className="text-[36px] font-bold tracking-tight">Technical <span className="text-primary italic">Expertise.</span></h2>
                            <div className="h-2 w-24 bg-primary rounded-full shadow-lg shadow-primary/20" aria-hidden="true" />
                            <p className="text-[17px] text-muted-foreground font-light max-w-2xl leading-relaxed">
                                I specialize in industrial-strength code for mission-critical platforms, focusing on the <span className="text-foreground font-medium border-b-2 border-primary/20">Roots ecosystem</span> and <span className="text-foreground font-medium border-b-2 border-primary/20">Laravel</span>.
                            </p>
                        </header>
                        <div className="space-y-6 text-xl font-light leading-relaxed text-muted-foreground">
                            <p>
                                I'm <span className="text-foreground font-medium">Nikhil Umaretiya</span>, a Senior PHP Developer specializing in high-performance digital infrastructure.
                            </p>
                            <p>
                                From <span className="text-foreground font-medium underline decoration-primary/30 text-xl md:text-2xl">Sage 10 & Bedrock</span> to <span className="text-foreground font-medium underline decoration-primary/30 text-xl md:text-2xl">Laravel SaaS</span> solutions, I build systems that scale with your growth.
                            </p>
                            <p className="text-lg">
                                I help agencies and startups eliminate technical debt and deliver premium user experiences.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-primary/10 to-emerald-500/10 glass border border-white/10 flex items-center justify-center overflow-hidden group">
                            <TechIllustration />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. Testimonials & Work Section */}
            <section className="px-4 py-12 md:py-16 max-w-7xl mx-auto w-full space-y-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Who I Work With */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-[36px] font-bold tracking-tight italic text-primary">Who <span className="text-foreground not-italic">I Work With.</span></h2>
                            <div className="h-2 w-24 bg-primary rounded-full shadow-lg shadow-primary/20" aria-hidden="true" />
                            <p className="text-[17px] text-muted-foreground font-light leading-relaxed">
                                I help startups, agencies, and businesses build fast, scalable, and secure digital products. I work best with partners who value technical excellence and long-term scalability.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: "Digital Agencies", desc: "Reliable white-label development for high-performance client projects." },
                                { title: "SaaS Startups", desc: "Building scalable MVPs and dashboards with Laravel and React." },
                                { title: "E-commerce Brands", desc: "Custom Shopify and WooCommerce stores optimized for maximum conversion." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 text-primary">
                                        <CheckCircle2 size={24} aria-hidden="true" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-[20px] font-bold tracking-tight">{item.title}</h3>
                                        <p className="text-muted-foreground font-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Work With Me */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 rounded-[3.5rem] space-y-10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5" aria-hidden="true">
                            <Code2 size={120} />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-[36px] font-bold tracking-tight">Work With Me</h2>
                            <p className="text-muted-foreground text-[17px] font-light">I am currently accepting new projects. Let's discuss how I can help your business grow.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3">
                                {["WordPress (Sage 10)", "Laravel Apps", "Shopify Stores", "Performance Audits"].map(tag => (
                                    <span key={tag} className="px-4 py-2 rounded-xl bg-foreground/5 text-[14px] font-bold border border-border/50">{tag}</span>
                                ))}
                            </div>
                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 inline-block">
                                <p className="text-primary font-black text-xl tracking-tight">Starting from $1,500+</p>
                                <p className="text-[12px] uppercase tracking-widest opacity-60 font-black mt-1">Typical Project Budget</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="group w-full py-6 rounded-3xl btn-emerald font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                            >
                                Start a Project <ArrowRight size={24} aria-hidden="true" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 8. Call To Action Section */}
            <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto w-full">
                <div className="btn-emerald rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" aria-hidden="true" />
                    <div className="relative z-10 space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                            Let's build your next <br />
                            <span className="text-emerald-foreground">high-performance website.</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-background text-emerald font-black rounded-3xl text-xl hover:scale-105 active:scale-95 shadow-2xl transition-all"
                        >
                            Start a Project <ArrowRight size={24} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
