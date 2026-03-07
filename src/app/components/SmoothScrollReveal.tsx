'use client';

import { useEffect } from 'react';

export default function SmoothScrollReveal({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -20px 0px"
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        return () => {
            revealElements.forEach(el => {
                revealObserver.unobserve(el);
            });
        }
    }, []);

    return <>{children}</>;
}
