import { Rock_Salt, Bebas_Neue, Inconsolata } from 'next/font/google';

export const rockSalt = Rock_Salt({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});

export const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
    display: 'auto',
    variable: '--font-bebas',
});

export const inconsolata = Inconsolata({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});
