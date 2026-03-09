import React from 'react';
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Nikhil Umaretiya | Senior PHP & WordPress Developer',
    description: 'Learn more about Nikhil Umaretiya, a Senior PHP Developer with 7+ years of experience in high-performance digital infrastructure.',
};

export default function About() {
    return <AboutClient />;
}
