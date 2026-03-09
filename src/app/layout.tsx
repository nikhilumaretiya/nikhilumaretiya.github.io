import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { cn } from '@/lib/utils';
import BackgroundEffects from './components/BackgroundEffects';
import StickyCTA from './components/StickyCTA';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nikhilumaretiya.github.io'),
  title: 'Nikhil Umaretiya – Senior PHP Developer | WordPress, Laravel, Shopify',
  description: 'Portfolio of Nikhil Umaretiya, a Senior PHP Developer with 7+ years of experience in WordPress (Sage 10 + Bedrock), Laravel, and Shopify development.',
  keywords: 'PHP Developer, WordPress Developer, Laravel Developer, Shopify Expert, Full Stack Developer India, Sage 10, Bedrock, GitHub Portfolio',
  authors: [{ name: 'Nikhil Umaretiya' }],
  alternates: {
    canonical: 'https://nikhilumaretiya.github.io',
  },
  verification: {
    google: 'QH51cM4fkXGnRkw92a4CvqSMhQCjzV4jil_Yw1MhxC4',
  },
  openGraph: {
    title: 'Nikhil Umaretiya – Senior PHP Developer',
    description: 'Explore my portfolio built with WordPress, Laravel, and Shopify.',
    url: 'https://nikhilumaretiya.github.io',
    siteName: 'Nikhil Umaretiya Portfolio',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Umaretiya – Senior PHP & WordPress Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Umaretiya – Senior PHP Developer',
    description: 'Explore my portfolio built with WordPress, Laravel, and Shopify.',
    images: ['/assets/images/og-image.png'],
  },
  icons: {
    icon: '/assets/images/logo.svg',
    shortcut: '/assets/images/logo.svg',
    apple: '/assets/images/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, 'font-inter text-foreground leading-[1.6]')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-xl focus:shadow-2xl focus:font-bold transition-all"
            >
              Skip to content
            </a>
            <BackgroundEffects />
            <Navbar />
            <main id="main-content" className="flex-grow relative z-10 w-full pt-28 md:pt-36 outline-none" tabIndex={-1}>
              {children}
            </main>
            <StickyCTA />
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
