import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proud to Pierce",
    description: "Placeholder..."
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Anta&family=Bebas+Neue&family=Krona+One&family=Patua+One&family=Special+Elite&family=Syncopate:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
                    rel="stylesheet"
                />
                <title>Vite + React + TS</title>
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
