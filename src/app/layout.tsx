import React from "react";
import type { Metadata } from "next";
import { bebasNeue } from "./fonts";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
    title: "Proud to Pierce",
    description: "Placeholder...",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${bebasNeue.variable}`}>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
