import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Nikhil Umaretiya – Senior PHP Developer | WordPress, Laravel, Shopify',
  description: 'Portfolio of Nikhil Umaretiya, a Senior PHP Developer with 7+ years of experience in high-performance WordPress (Sage 10 + Bedrock), Laravel, and Shopify development.',
  keywords: 'PHP Developer, WordPress Developer, Laravel Developer, Shopify Expert, Full Stack Developer India, Sage 10, Bedrock, GitHub Portfolio',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Umaretiya",
    "jobTitle": "Senior PHP Developer",
    "url": "https://nikhilumaretiya.github.io",
    "sameAs": [
      "https://github.com/nikhilumaretiya",
      "https://linkedin.com/in/nikhilumaretiya"
    ],
    "knowsAbout": ["WordPress", "Laravel", "Shopify", "PHP", "React", "Next.js"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
