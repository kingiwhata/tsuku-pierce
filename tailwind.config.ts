import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bebas: ['var(--font-bebas)'],
            },
        },
    },
    plugins: [],
} satisfies Config;
