'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import Link from 'next/link';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-8 right-8 z-[100]"
                >
                    <Link
                        href="/contact"
                        className="flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border border-white/10"
                    >
                        <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
                        <span className="font-bold tracking-tight">Let's Talk</span>

                        {/* Subtle ping indicator */}
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white/20"></span>
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
