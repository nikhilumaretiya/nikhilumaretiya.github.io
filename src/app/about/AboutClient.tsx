'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin, FaAmazon } from 'react-icons/fa6';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as any }
    }
};

export default function AboutClient() {
    return (
        <div className="flex flex-col pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
            {/* Bio Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
                <motion.div variants={itemVariants} className="space-y-8">
                    <div>
                        <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-tighter mb-6 leading-none">The <span className="text-primary">Developer</span> behind the code.</h1>
                        <div className="h-2 w-24 bg-primary rounded-full mb-10 shadow-lg shadow-primary/20" />
                        <p className="text-[17px] md:text-[20px] text-muted-foreground leading-relaxed font-light">
                            Hi, I'm <span className="text-foreground font-medium border-b-2 border-primary/20">Nikhil Umaretiya</span>, a PHP developer with 7+ years of experience building high-performance websites and applications.
                        </p>
                    </div>

                    <p className="text-[17px] text-muted-foreground font-light leading-relaxed">
                        I specialize in WordPress (Sage), Laravel, and Shopify development and work with agencies and startups to deliver fast, scalable digital platforms. My focus is on merging <span className="text-foreground font-medium">clean code</span> with <span className="text-foreground font-medium">premium performance</span>.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/contact" className="btn-emerald px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">
                            Start a Project
                        </Link>
                        <div className="flex gap-2">
                            <a href="https://github.com/nikhilumaretiya" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-primary transition-all" aria-label="GitHub Profile">
                                <SiGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/nikhilumaretiya" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:text-primary transition-all" aria-label="LinkedIn Profile">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="p-4 glass rounded-2xl hover:text-primary transition-all" aria-label="X (Twitter) Profile">
                                <SiX size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden glass border-4 border-white/10 shadow-2xl">
                        <Image
                            src="/assets/images/profile.webp"
                            alt="Nikhil Umaretiya"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Trust Indicators */}
                    <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl shadow-2xl space-y-2 border-primary/20">
                        <div className="flex items-center gap-2 text-primary">
                            <FaAmazon size={18} />
                            <span className="font-bold text-[14px] uppercase tracking-widest">Senior Developer</span>
                        </div>
                        <p className="text-[14px] font-bold uppercase tracking-[0.2em] opacity-40 italic">7+ Years Proficiency</p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Experience Ticker */}
            <section className="py-12 md:py-16 border-y border-border/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div className="text-center space-y-2">
                        <p className="text-4xl font-bold tracking-tighter">50+</p>
                        <p className="text-[14px] font-bold uppercase tracking-[0.2em] opacity-40">Projects Delivered</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl font-bold tracking-tighter">95+</p>
                        <p className="text-[14px] font-bold uppercase tracking-[0.2em] opacity-40">Lighthouse Performance</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl font-bold tracking-tighter">100%</p>
                        <p className="text-[14px] font-bold uppercase tracking-[0.2em] opacity-40">Client Satisfaction</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-4xl font-bold tracking-tighter">24hr</p>
                        <p className="text-[14px] font-bold uppercase tracking-[0.2em] opacity-40">Response Time</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
