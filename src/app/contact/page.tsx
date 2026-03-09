import React from 'react';
import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact Nikhil Umaretiya | Hire a PHP Expert',
    description: 'Ready to scale your technical infrastructure? Contact Nikhil Umaretiya for custom WordPress, Laravel, or Shopify development services.',
};

export default function Contact() {
    return <ContactClient />;
}
