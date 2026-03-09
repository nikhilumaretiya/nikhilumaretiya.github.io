'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="glass w-full max-w-3xl rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95" aria-label="Nikhil Umaretiya Portfolio Home">
                    <Logo className="w-8 h-8 text-primary group-hover:text-emerald transition-colors" />
                    <span className="hidden sm:block text-xl font-bold tracking-tighter font-space">
                        NIKHIL<span className="text-primary font-bold">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.path ? "text-primary" : "text-foreground/70"
                            )}
                        >
                            {item.path === pathname && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        className="md:hidden p-2 rounded-full hover:bg-foreground/5 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    id="mobile-navigation"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile Navigation Menu"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-20 left-4 right-4 glass rounded-3xl p-6 md:hidden shadow-2xl"
                >
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "text-lg font-medium px-4 py-2 rounded-xl transition-colors",
                                    pathname === item.path ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-foreground/5"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
