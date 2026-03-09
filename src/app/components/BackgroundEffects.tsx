'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Zap, Server, Layout, Smartphone } from 'lucide-react';

const icons = [
    { Icon: Code2, size: 24, top: '15%', left: '10%', delay: 0 },
    { Icon: Database, size: 20, top: '45%', left: '85%', delay: 2 },
    { Icon: Cpu, size: 28, top: '75%', left: '15%', delay: 1 },
    { Icon: Globe, size: 22, top: '10%', left: '80%', delay: 3 },
    { Icon: Zap, size: 18, top: '60%', left: '90%', delay: 4 },
    { Icon: Server, size: 24, top: '85%', left: '70%', delay: 5 },
    { Icon: Layout, size: 20, top: '30%', left: '5%', delay: 1.5 },
    { Icon: Smartphone, size: 22, top: '5%', left: '40%', delay: 2.5 },
];

export default function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);

    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the cursor follower
    const springX = useSpring(mouseX, { stiffness: 60, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 25 });

    // --- MOVE HOOKS TO TOP LEVEL ---

    // Spotlight transforms
    const spotlightLargeX = useTransform(springX, (x) => x - 400);
    const spotlightLargeY = useTransform(springY, (y) => y - 400);
    const spotlightSmallX = useTransform(springX, (x) => x - 250);
    const spotlightSmallY = useTransform(springY, (y) => y - 250);

    // Parallax offsets for floating elements
    // We use a default value for SSR/Initial render to avoid window dependency in hook declaration
    const parallaxX = useTransform(springX, (x) => {
        if (typeof window === 'undefined') return 0;
        return (x - window.innerWidth / 2) * 0.05;
    });
    const parallaxY = useTransform(springY, (y) => {
        if (typeof window === 'undefined') return 0;
        return (y - window.innerHeight / 2) * 0.05;
    });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            {/* 1. Mouse Spotlight */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full opacity-20 dark:opacity-40"
                style={{
                    x: spotlightLargeX,
                    y: spotlightLargeY,
                    background: 'radial-gradient(circle, hsla(var(--primary), 0.15) 0%, transparent 70%)',
                }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-60"
                style={{
                    x: spotlightSmallX,
                    y: spotlightSmallY,
                    background: 'radial-gradient(circle, hsla(var(--emerald), 0.1) 0%, transparent 70%)',
                }}
            />

            {/* 2. Dynamic Mesh Shapes (Slow moving) */}
            <motion.div
                animate={{
                    x: [0, 150, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[15%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 dark:bg-primary/10 blur-[130px]"
            />

            <motion.div
                animate={{
                    x: [0, -120, 0],
                    y: [0, 80, 0],
                    scale: [1.3, 1, 1.3],
                    rotate: [0, -45, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[35%] -right-[15%] w-[50%] h-[60%] rounded-full bg-emerald/5 dark:bg-emerald/10 blur-[110px]"
            />

            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 150, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-[20%] left-[15%] w-[70%] h-[50%] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]"
            />

            {/* 3. Floating Technical Elements (Subtle Parallax) */}
            {icons.map(({ Icon, size, top, left, delay }, i) => (
                <motion.div
                    key={i}
                    className="absolute text-foreground/5 dark:text-foreground/10"
                    style={{
                        top,
                        left,
                        x: parallaxX,
                        y: parallaxY,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        opacity: { duration: 5, repeat: Infinity, delay },
                        y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay },
                    }}
                >
                    <Icon size={size} />
                </motion.div>
            ))}
        </div>
    );
}
