"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const nodes = [
    { cx: 150, cy: 85, label: "LARAVEL", tooltip: "Scalable backend systems and SaaS platforms." },
    { cx: 50, cy: 85, label: "SAGE", tooltip: "Modern WordPress development using the Roots ecosystem." },
    { cx: 150, cy: 115, label: "REACT", tooltip: "Interactive UIs and complex frontend applications." },
    { cx: 50, cy: 115, label: "PHP", tooltip: "High-performance server-side logic and optimization." },
    { cx: 100, cy: 50, label: "AWS / CLOUD", tooltip: "Scalable infrastructure and cloud deployment." },
    { cx: 100, cy: 150, label: "ECOMMERCE", tooltip: "Custom WooCommerce and Shopify solutions." },
];

export function TechIllustration() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    return (
        <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="w-[90%] h-[90%] border border-primary/5 rounded-full border-dashed"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[70%] h-[70%] border border-primary/5 rounded-full"
                />
            </div>

            {/* Inner Container to sync Tooltip with SVG */}
            <div className="relative w-full h-full max-w-[350px] aspect-square">
                {/* Tooltip Popup */}
                <AnimatePresence>
                    {hoveredNode !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 0, scale: 0.95, x: "-50%" }}
                            animate={{
                                opacity: 1,
                                y: -25, // Responsive vertical offset
                                scale: 1,
                                left: `${(nodes[hoveredNode].cx / 200) * 100}%`,
                                top: `${(nodes[hoveredNode].cy / 200) * 100}%`
                            }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            style={{ x: "-50%", translateY: "-100%" }}
                            className="absolute z-50 px-3 py-2 bg-background/95 border border-primary/40 rounded-lg shadow-2xl min-w-[160px] text-center pointer-events-none"
                        >
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{nodes[hoveredNode].label}</p>
                            <p className="text-[11px] text-foreground leading-snug font-medium line-clamp-2">{nodes[hoveredNode].tooltip}</p>
                            {/* Tooltip Arrow */}
                            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-background border-r border-b border-primary/40 rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <svg
                    viewBox="0 0 200 200"
                    className="relative w-full h-full drop-shadow-2xl"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#22C55E" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#22C55E" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* Connection Lines */}
                    <motion.path
                        d="M100 50 L150 85 M100 50 L50 85 M100 150 L150 115 M100 150 L50 115 M50 85 L50 115 M150 85 L150 115"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />

                    {/* Core Node */}
                    <motion.g
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <circle cx="100" cy="100" r="22" fill="black" stroke="#22C55E" strokeWidth="0.5" strokeOpacity="0.3" />
                        <circle cx="100" cy="100" r="32" fill="url(#coreGlow)">
                            <animate attributeName="r" values="28;35;28" dur="4s" repeatCount="indefinite" />
                        </circle>
                        {/* Central Code Icon </> */}
                        <g transform="translate(90, 94) scale(0.8)" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                            <polyline points="6 4 1 9 6 14" />
                            <polyline points="19 4 24 9 19 14" />
                            <line x1="15" y1="1" x2="10" y2="17" />
                        </g>
                    </motion.g>

                    {/* Satellite Nodes with Labels */}
                    {nodes.map((node, i) => (
                        <motion.g
                            key={i}
                            className="cursor-pointer pointer-events-auto select-none"
                            onMouseEnter={() => setHoveredNode(i)}
                            onMouseLeave={() => setHoveredNode(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredNode !== null && hoveredNode !== i ? 0.2 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <circle cx={node.cx} cy={node.cy} r="9" fill="black" stroke="#22C55E" strokeWidth="0.5" strokeOpacity="0.4" />
                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r="2.5"
                                fill="#22C55E"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            />

                            {/* Label Text - Integrated into the node area */}
                            <text
                                x={node.cx > 100 ? node.cx + 14 : node.cx - 14}
                                y={node.cy + 3}
                                fill="currentColor"
                                className="text-[7px] font-black tracking-widest opacity-25"
                                textAnchor={node.cx > 100 ? "start" : "end"}
                            >
                                {node.label}
                            </text>

                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r="6"
                                stroke="#22C55E"
                                strokeWidth="0.5"
                                initial={{ scale: 1, opacity: 0.4 }}
                                animate={{ scale: hoveredNode === i ? 2.8 : 2.2, opacity: 0 }}
                                transition={{ duration: hoveredNode === i ? 1 : 3, repeat: Infinity, delay: i * 0.5 }}
                            />
                        </motion.g>
                    ))}
                </svg>
            </div>
        </div>
    );
}
