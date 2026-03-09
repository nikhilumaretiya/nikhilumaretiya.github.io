'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import Logo from './Logo';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-md py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="space-y-6 max-w-sm">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo className="w-6 h-6 text-primary group-hover:text-emerald transition-colors" />
                        <span className="text-xl font-black tracking-tighter uppercase">
                            NIKHIL<span className="text-primary">.</span>
                        </span>
                    </Link>
                    <div className="space-y-4">
                        <p className="font-bold text-foreground uppercase tracking-widest text-[14px]">Nikhil Umaretiya</p>
                        <p className="text-muted-foreground text-[17px] font-light">Senior PHP Developer specializing in WordPress, Laravel, and Shopify.</p>
                        <div className="pt-2">
                            <p className="text-[14px] font-bold uppercase tracking-widest opacity-40 mb-1 leading-none">Available for freelance projects</p>
                            <a href="mailto:nikhilumaretiya17@gmail.com" className="text-lg font-bold hover:text-primary transition-colors block leading-tight">nikhilumaretiya17@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                        <Link
                            href="https://github.com/nikhilumaretiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-2xl glass hover:text-primary transition-all"
                            aria-label="GitHub Profile (External Link)"
                        >
                            <SiGithub size={20} />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/nikhilumaretiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-2xl glass hover:text-primary transition-all"
                            aria-label="LinkedIn Profile (External Link)"
                        >
                            <FaLinkedin size={20} />
                        </Link>
                        <Link
                            href="https://twitter.com/nikhilumaretiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-2xl glass hover:text-primary transition-all"
                            aria-label="X (formerly Twitter) Profile (External Link)"
                        >
                            <SiX size={20} />
                        </Link>
                        <Link
                            href="mailto:nikhilumaretiya17@gmail.com"
                            className="p-3 rounded-2xl glass hover:text-primary transition-all"
                            aria-label="Send Email"
                        >
                            <Mail size={20} />
                        </Link>
                    </div>
                    <p className="text-[14px] font-bold uppercase tracking-[0.3em] opacity-40">
                        © {currentYear} Nikhil Umaretiya. Built with technical excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
