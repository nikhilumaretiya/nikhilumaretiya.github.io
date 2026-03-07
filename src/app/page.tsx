"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaWordpress, FaLaravel, FaReact, FaShopify } from "react-icons/fa";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <article className="about active" data-page="about">
      {/* Hero Section */}
      <motion.section
        className="relative pt-12 pb-16 px-4 md:px-8 mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-eerie-black-1 to-smoky-black border border-white/5 shadow-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-color/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-color/10 border border-accent-color/20 text-accent-color text-sm font-medium tracking-wide">
            Available for Freelance
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-1 leading-tight mb-6">
          Hi, I'm Nikhil.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-color to-purple-500">
            Full-Stack Developer.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-light-gray text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">
          I build high-performance, scalable web solutions. Specializing in custom
          <span className="text-white-2 font-medium"> WordPress</span>, robust
          <span className="text-white-2 font-medium"> Laravel</span> apps, and headless
          <span className="text-white-2 font-medium"> React</span> interfaces.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-12">
          <Link href="/portfolio" className="bg-accent-color text-smoky-black font-semibold px-8 py-3 rounded-xl hover:bg-white-1 transition-colors duration-300 shadow-[0_0_20px_rgba(180,100%,65%,0.3)]">
            Explore My Work
          </Link>
          <Link href="/contact" className="bg-eerie-black-1 border border-white/10 text-white-2 font-medium px-8 py-3 rounded-xl hover:bg-white/5 transition-colors duration-300">
            Get in Touch
          </Link>
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <p className="text-sm font-medium text-light-gray-70 uppercase tracking-widest">Core Technologies</p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-light-gray backdrop-blur-sm">
              <FaWordpress className="text-[#21759b] text-xl" /> <span>WordPress</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-light-gray backdrop-blur-sm">
              <FaLaravel className="text-[#ff2d20] text-xl" /> <span>Laravel</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-light-gray backdrop-blur-sm">
              <FaReact className="text-[#61dafb] text-xl" /> <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-light-gray backdrop-blur-sm">
              <FaShopify className="text-[#95bf47] text-xl" /> <span>Shopify</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Quick Stats Bento */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-white-2 mb-6 flex items-center gap-4">
          By The Numbers
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-border-gradient-onyx p-[1px] rounded-2xl"
          >
            <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <h4 className="text-4xl font-bold text-accent-color mb-2">7+</h4>
              <p className="text-light-gray text-sm uppercase tracking-wider font-medium">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-border-gradient-onyx p-[1px] rounded-2xl"
          >
            <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <h4 className="text-4xl font-bold text-accent-color mb-2">50+</h4>
              <p className="text-light-gray text-sm uppercase tracking-wider font-medium">Projects Done</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-border-gradient-onyx p-[1px] rounded-2xl"
          >
            <div className="bg-bg-gradient-jet h-full w-full rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <h4 className="text-4xl font-bold text-accent-color mb-2">100%</h4>
              <p className="text-light-gray text-sm uppercase tracking-wider font-medium">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="text-2xl font-semibold text-white-2 mb-6 flex items-center gap-4">
          Testimonials
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
        </h3>
        <ul className="testimonials-list has-scrollbar pb-6 flex gap-4 overflow-x-auto snap-x">
          <li className="testimonials-item min-w-full md:min-w-[400px] snap-center">
            <div className="bg-bg-gradient-jet border border-white/5 p-8 rounded-2xl relative mt-8">
              <figure className="absolute -top-6 left-8 bg-gradient-onyx p-1 rounded-2xl shadow-1">
                <img src="/assets/images/avatar-3.png" alt="Lyn" width="60" className="rounded-xl" />
              </figure>
              <h4 className="text-lg font-semibold text-white-2 mt-4 mb-1">Lyn</h4>
              <time className="text-xs text-light-gray-70 mb-4 block" dateTime="2025-05-02">02 May, 2025</time>
              <div className="text-light-gray text-sm leading-relaxed italic">
                <p>
                  "Nikhil revamped our WooCommerce store using Sage 10 and completely transformed
                  our user experience. The site looks cleaner, loads faster, and is much easier to
                  manage now. His technical knowledge and proactive suggestions made a huge difference."
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
