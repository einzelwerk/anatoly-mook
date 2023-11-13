/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'gradient-light': `linear-gradient(180deg, #FCF6EC 0%, #DACEBC 100%)`,
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                scale: 'scale .8s ease-in-out infinite alternate',
                marquee: 'marquee 15s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            borderRadius: {
                '4xl': '2.5rem',
                '5xl': '3rem',
            },
            colors: {
                white: '#FFFBF5',
                blue: {
                    600: '#5941E9',
                },
                green: {
                    200: '#818C78',
                    800: '#373833',
                    900: '#2A2C26',
                    950: '#171715',
                },
                gray: {
                    0: '#fff',
                    50: '#EFF0F5',
                    100: '#DADBE4',
                    400: '#92939A',
                    700: '#4A4853',
                    800: '#292732',
                    900: '#292732',
                },
                gradientDarkStart: '#373A32',
                gradientDarkEnd: '#171715',
                gradientLightStart: '#FCF6EC',
                gradientLightEnd: '#DACEBC',
                accordionBorder: '#B9AFA0',
                footerInput: '#747671',
                disabledButton: 'rgba(217, 217, 217, 0.12)',
            },
            fontFamily: {
                sans: ['var(--primary-font)', ...defaultTheme.fontFamily.sans],
                optima: ['var(--accent-font)'],
            },

            container: {
                center: true,
            },
            fontSize: {
                '8xl': ['5rem', '6.25rem'],
                '7xl': ['4rem', '6.25rem'],
                '6xl': ['3rem', '3.5rem'],
                '5xl': ['2.5rem', '3.125rem'],
                '4xl': ['2.25rem', '2.75rem'],
                '3xl': ['1.75rem', '2.25rem'],
                '2xl': ['1.5rem', '2rem'],
                xl: ['1.25rem', '1.875rem'],
                lg: ['1.125rem', '1.625rem'],
                base: ['1rem', '1.5rem'],
                sm: ['0.875rem', '1.25rem'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        ({ addComponents }) => {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    width: '100%',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    margin: '0 auto',
                    '@screen sm': {
                        width: '640px',
                    },
                    '@screen md': {
                        width: '768px',
                    },
                    '@screen lg': {
                        width: '1280px',
                    },
                },
            });
        },
    ],
};
