'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md">
            <div className="relative flex flex-col items-center gap-8">
                {/* Animated Logo/Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 1],
                        opacity: 1,
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-20 h-20 rounded-[2rem] bg-primary flex items-center justify-center text-primary-foreground font-black text-4xl shadow-2xl shadow-primary/40 px-4"
                >
                    N
                </motion.div>

                {/* Loading Bar Container */}
                <div className="w-48 h-1 bg-foreground/5 rounded-full overflow-hidden border border-border/50">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground animate-pulse"
                >
                    Optimizing Assets
                </motion.p>
            </div>
        </div>
    );
}
