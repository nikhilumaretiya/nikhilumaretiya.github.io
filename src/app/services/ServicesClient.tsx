'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import {
    SiWordpress,
    SiLaravel,
    SiShopify,
    SiNextdotjs,
    SiGithub,
    SiVercel
} from 'react-icons/si';
import { cn } from '@/lib/utils';

const services = [
    {
        title: 'Custom WordPress & Sage 10',
        description: 'Blazing-fast, high-performance WordPress sites using modern stacks like Sage 10, Bedrock, and ACF Pro. I specialize in clean, modular code that stays maintainable and SEO-ready.',
        icon: SiWordpress,
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10',
        skills: ['Sage 10', 'Bedrock', 'ACF Pro', 'Gutenberg', 'WPML'],
        size: 'large'
    },
    {
        title: 'Laravel Web Applications',
        description: 'Fully custom, scalable SaaS applications, secure REST & GraphQL APIs, and complex backend administration dashboards tailored to your business logic.',
        icon: SiLaravel,
        color: 'text-[#ff2d20]',
        bgColor: 'bg-[#ff2d20]/10',
        skills: ['Laravel 10', 'Vue.js', 'Inertia.js', 'MySQL', 'Redis'],
        size: 'medium'
    },
    {
        title: 'Shopify Development',
        description: 'Expert Shopify 2.0 theme development, deep Liquid customization, private app integrations, and checkout flow optimization for high-converting stores.',
        icon: SiShopify,
        color: 'text-[#95bf47]',
        bgColor: 'bg-[#95bf47]/10',
        skills: ['Liquid', 'OS 2.0', 'AJAX API', 'Theme Kit'],
        size: 'medium'
    },
    {
        title: 'Performance & Optimization',
        description: 'Achieve 95+ Lighthouse scores. I audit and optimize legacy systems for Core Web Vitals, conversion rates, and server-side performance.',
        icon: Zap,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10',
        skills: ['Web Vitals', 'Caching', 'CDNs', 'Asset Bundling'],
        size: 'small'
    },
    {
        title: 'Modern Frontend & UI/UX',
        description: 'Crafting pixel-perfect, mobile-first interfaces using Next.js, Tailwind CSS, and Framer Motion for a fluid, native-app-like experience.',
        icon: SiNextdotjs,
        color: 'text-cyan-500',
        bgColor: 'bg-cyan-500/10',
        skills: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
        size: 'small'
    },
    {
        title: 'Systems & API Integration',
        description: 'Connecting your platform to external services, payment gateways, CRM systems, and third-party APIs via secure, robust integration layers.',
        icon: SiGithub,
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
        skills: ['REST', 'GraphQL', 'Webhooks', 'Auth Systems'],
        size: 'small'
    }
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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as any },
    },
};

export default function ServicesClient() {
    return (
        <div className="flex flex-col pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
            <header className="space-y-6">
                <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-tighter leading-tight">Specialized <span className="text-primary italic">Expertise.</span></h1>
                <div className="h-2 w-24 bg-primary rounded-full shadow-lg shadow-primary/20" />
                <p className="text-[17px] text-muted-foreground font-light max-w-3xl leading-relaxed">
                    I translate complex business requirements into <span className="text-foreground font-medium border-b-2 border-primary/20">high-availability digital products</span> that scale alongside your growth.
                </p>
            </header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-6 gap-6"
            >
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        variants={itemVariants}
                        className={cn(
                            "glass-card p-8 rounded-[2.5rem] flex flex-col group hover:border-primary/50 transition-all",
                            service.size === 'large' ? 'md:col-span-4' :
                                service.size === 'medium' ? 'md:col-span-3' : 'md:col-span-2'
                        )}
                    >
                        <div className={cn("p-4 rounded-3xl w-fit mb-6", service.bgColor)}>
                            <service.icon size={28} className={service.color} aria-hidden="true" />
                        </div>

                        <h3 className="text-[20px] font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-muted-foreground text-[17px] font-light leading-relaxed mb-8">
                            {service.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-2">
                            {service.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-lg text-[14px] font-medium bg-foreground/5 border border-border/50 text-muted-foreground"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Technology Focus Section */}
            <section className="pt-12">
                <div className="glass-card rounded-[2.5rem] p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-center md:text-left">
                            <h2 className="text-[36px] font-bold tracking-tight italic">
                                "Performance is not an afterthought, <br />
                                <span className="text-primary not-italic">it is the foundation.</span>"
                            </h2>
                            <p className="text-muted-foreground font-light text-[17px]">
                                I specialize in the modern PHP ecosystem, specifically the Roots suite for WordPress (Sage 10, Bedrock) and full-stack Laravel development. By combining these with modern front-end tools, I deliver industrial-strength code for mission-critical platforms.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 glass rounded-3xl border-primary/20 flex flex-col items-center text-center space-y-2">
                                <SiGithub size={40} className="text-primary opacity-80" aria-hidden="true" />
                                <p className="font-bold text-sm">Clean Architecture</p>
                            </div>
                            <div className="p-6 glass rounded-3xl border-primary/20 mt-8 flex flex-col items-center text-center space-y-2">
                                <SiVercel size={40} className="text-primary opacity-80" aria-hidden="true" />
                                <p className="font-bold text-sm">Automated CI/CD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
