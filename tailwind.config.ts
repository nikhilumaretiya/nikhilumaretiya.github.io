import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'jet': 'var(--jet)',
                'onyx': 'var(--onyx)',
                'eerie-black-1': 'var(--eerie-black-1)',
                'eerie-black-2': 'var(--eerie-black-2)',
                'smoky-black': 'var(--smoky-black)',
                'white-1': 'var(--white-1)',
                'white-2': 'var(--white-2)',
                'accent-color': 'var(--accent-color)',
                'light-gray': 'var(--light-gray)',
                'light-gray-70': 'var(--light-gray-70)',
            },
            backgroundImage: {
                'bg-gradient-onyx': 'var(--bg-gradient-onyx)',
                'bg-gradient-jet': 'var(--bg-gradient-jet)',
                'bg-gradient-accent-1': 'var(--bg-gradient-accent-1)',
                'bg-gradient-accent-2': 'var(--bg-gradient-accent-2)',
                'border-gradient-onyx': 'var(--border-gradient-onyx)',
                'text-gradient-accent': 'var(--text-gradient-accent)',
            },
            fontFamily: {
                poppins: ['var(--ff-poppins)'],
            },
            boxShadow: {
                '1': 'var(--shadow-1)',
                '2': 'var(--shadow-2)',
                '3': 'var(--shadow-3)',
                '4': 'var(--shadow-4)',
                'accent': 'var(--shadow-accent)',
            },
        },
    },
    plugins: [],
};
export default config;
