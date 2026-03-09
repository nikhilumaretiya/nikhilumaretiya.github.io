import React from 'react';
import { Metadata } from 'next';
import ResumeClient from './ResumeClient';

export const metadata: Metadata = {
    title: 'Resume & Technical Skills | Nikhil Umaretiya',
    description: 'Professional experience and technical skill set of Nikhil Umaretiya, specializing in Full-Stack PHP development.',
};

export default function Resume() {
    return <ResumeClient />;
}
