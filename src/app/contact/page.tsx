'use client';
import { useState } from 'react';

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
                setStatus("Thanks for your submission!");
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
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-form">
                <form action="https://formspree.io/f/xvgreobl" method="POST" className="form reveal active" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    <textarea
                        className="form-input"
                        placeholder="Your Message"
                        name="message"
                        required
                        rows={4}
                    />

                    <button className="form-btn" type="submit" disabled={isSubmitting}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" /></svg>
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    {status && <p id="my-form-status" style={{ color: '#008000', marginTop: '10px' }}>{status}</p>}
                </form>
            </section>
        </article>
    );
}
