import React from 'react';
import type { Metadata } from 'next';
import { bebasNeue, inconsolata } from './fonts';
import { MedusaProviders } from './providers';
import { Footer } from '../components/footer';

import '../styles/App.css';
import '../styles/index.css';
import '../styles/global.css';
import { Nav } from '../components/nav';

export const metadata: Metadata = {
    title: 'Proud to Pierce',
    description: 'Placeholder...',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${bebasNeue.variable} ${inconsolata.className}`}
        >
            <body className="flex-col">
                <MedusaProviders>
                    <Nav />
                    <main className="w-screen text-center my-0 mx-auto">
                        {children}
                    </main>
                    <Footer />
                </MedusaProviders>
            </body>
        </html>
    );
}
