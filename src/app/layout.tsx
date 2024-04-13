import React from 'react';
import type { Metadata } from 'next';
import { bebasNeue, inconsolata } from './fonts';
import { MedusaProviders } from './providers';

import '../styles/App.css';
import '../styles/index.css';
import '../styles/global.css';

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
            <body>
                <MedusaProviders>
                    <main className="h-screen w-screen text-center my-0 mx-auto">
                        {children}
                    </main>
                </MedusaProviders>
            </body>
        </html>
    );
}
