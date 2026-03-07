'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("Thanks for your message! I'll get back to you soon.");
                form.reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, 'errors')) {
                    setStatus(result.errors.map((error: any) => error.message).join(", "));
                } else {
                    setStatus("Oops! There was a problem submitting your form");
                }
            }
        } catch (error) {
            setStatus("Oops! There was a problem submitting your form");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title mb-8">Contact</h2>
            </header>

            <section className="mb-12">
                {/* Map placeholder or modern contact intro */}
                <div className="bg-bg-gradient-jet border border-white/5 rounded-2xl p-8 mb-10 shadow-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-color/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                    <h3 className="text-2xl font-bold text-white-2 mb-4">Let's build something amazing together.</h3>
                    <p className="text-light-gray leading-relaxed max-w-2xl">
                        I'm currently available for freelance work and open to new opportunities.
                        If you have a project that needs some creative coding, or simply want to say hello,
                        drop me a message!
                    </p>
                </div>

                <motion.form
                    action="https://formspree.io/f/xvgreobl"
                    method="POST"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input
                                type="text"
                                name="fullname"
                                className="w-full bg-eerie-black-1 border border-white/10 rounded-xl px-5 py-4 text-white-1 outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 placeholder:text-light-gray-70"
                                placeholder="Full name"
                                required
                            />
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                name="email"
                                className="w-full bg-eerie-black-1 border border-white/10 rounded-xl px-5 py-4 text-white-1 outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 placeholder:text-light-gray-70"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>

                    <div className="relative group">
                        <textarea
                            name="message"
                            className="w-full bg-eerie-black-1 border border-white/10 rounded-xl px-5 py-4 text-white-1 outline-none focus:border-accent-color focus:ring-1 focus:ring-accent-color transition-all duration-300 placeholder:text-light-gray-70 resize-none min-h-[150px]"
                            placeholder="Your Message..."
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-4 mt-2">
                        {status && (
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`text-sm font-medium ${status.includes('Oops') ? 'text-red-400' : 'text-green-400'}`}
                            >
                                {status}
                            </motion.p>
                        )}
                        {!status && <div />} {/* Spacer if no status */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-bg-gradient-jet border border-accent-color/50 text-accent-color font-semibold px-8 py-4 rounded-xl hover:bg-accent-color hover:text-smoky-black transition-all duration-300 shadow-[0_0_15px_rgba(180,100%,65%,0.2)] hover:shadow-[0_0_25px_rgba(180,100%,65%,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-bg-gradient-jet disabled:hover:text-accent-color"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mt-[2px]"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /></svg>
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </div>
                </motion.form>
            </section>
        </article>
    );
}
