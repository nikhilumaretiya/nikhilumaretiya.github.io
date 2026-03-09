import React from 'react';
import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Services & Expertise | WordPress, Laravel, Shopify',
    description: 'Specialized development services including custom Sage 10 themes, Laravel applications, and advanced Shopify optimization.',
};

export default function Services() {
    return <ServicesClient />;
}
