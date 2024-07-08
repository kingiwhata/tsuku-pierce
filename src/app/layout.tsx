import type { Metadata } from 'next';
import { bebasNeue, inconsolata } from './fonts';
import { Nav } from './components/nav';
import { Footer } from './components/footer';

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
            <body className="flex-col">
                <Nav />
                <main className="w-svw text-center my-0 mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
