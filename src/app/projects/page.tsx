import React from 'react';
import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
    title: 'Projects & Case Studies | Nikhil Umaretiya',
    description: 'Explore a portfolio of high-performance WordPress, Laravel, and Shopify projects delivered for global clients and agencies.',
};

export default function Projects() {
    return <ProjectsClient />;
}
