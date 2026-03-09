'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

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

export default function ContactClient() {
    return (
        <div className="flex flex-col pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 text-center md:text-left"
            >
                <h1 className="text-[34px] md:text-[48px] lg:text-[64px] font-bold tracking-tighter leading-none">Let's <span className="text-primary italic">Collaborate.</span></h1>
                <div className="h-2 w-24 bg-primary rounded-full mx-auto md:mx-0 shadow-lg shadow-primary/20" />
                <p className="text-[17px] md:text-[20px] text-muted-foreground font-light max-w-3xl mx-auto md:mx-0 leading-relaxed">
                    Ready to scale your technical infrastructure? Reach out today for a consultation on <span className="text-foreground font-medium border-b-2 border-primary/20">performance-first development</span>.
                </p>
            </motion.header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
                {/* Contact Info */}
                <div className="space-y-8">
                    <motion.div variants={itemVariants} className="glass-card p-10 rounded-[2.5rem] space-y-6">
                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-primary opacity-60">Contact Channels</h3>
                        <div className="space-y-6 text-lg">
                            <a href="mailto:nikhilumaretiya17@gmail.com" className="flex items-center gap-4 group hover:text-primary transition-colors" aria-label="Send an email to nikhilumaretiya17@gmail.com">
                                <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                                    <Mail size={24} className="text-primary" />
                                </div>
                                <span className="font-light truncate text-[17px]">nikhilumaretiya17@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-2xl bg-primary/5 transition-colors shrink-0">
                                    <MapPin size={24} className="text-primary" aria-label="Location" />
                                </div>
                                <span className="font-light italic text-[17px]">Remote / International</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="glass-card p-10 rounded-[2.5rem] space-y-8">
                        <h3 className="text-[14px] font-bold uppercase tracking-widest text-primary opacity-60">Digital Footprint</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/nikhilumaretiya" target="_blank" rel="noopener noreferrer" className="p-6 glass rounded-[2rem] hover:text-primary transition-all group" aria-label="GitHub Profile">
                                <SiGithub size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://linkedin.com/in/nikhilumaretiya" target="_blank" rel="noopener noreferrer" className="p-6 glass rounded-[2rem] hover:text-primary transition-all group" aria-label="LinkedIn Profile">
                                <FaLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="p-6 glass rounded-[2rem] hover:text-primary transition-all group" aria-label="X (Twitter) Profile">
                                <SiX size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div variants={itemVariants} className="lg:col-span-2 glass-card p-10 md:p-16 rounded-[3rem]">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label htmlFor="name" className="text-[14px] font-bold uppercase tracking-widest opacity-40 ml-4">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="e.g. John Doe"
                                    className="w-full px-6 py-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.05] border border-foreground/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-[17px] text-foreground placeholder:text-muted-foreground/40"
                                />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="email" className="text-[14px] font-bold uppercase tracking-widest opacity-40 ml-4">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="e.g. john@business.com"
                                    className="w-full px-6 py-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.05] border border-foreground/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-[17px] text-foreground placeholder:text-muted-foreground/40"
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="details" className="text-[14px] font-bold uppercase tracking-widest opacity-40 ml-4">Project Details</label>
                            <textarea
                                id="details"
                                name="details"
                                required
                                rows={6}
                                placeholder="Describe your project, timeline, and goals..."
                                className="w-full px-6 py-5 rounded-2xl bg-foreground/[0.03] dark:bg-white/[0.05] border border-foreground/10 dark:border-white/10 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-[17px] text-foreground placeholder:text-muted-foreground/40 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group w-full py-6 rounded-3xl btn-emerald font-bold text-[17px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                        >
                            Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
}
