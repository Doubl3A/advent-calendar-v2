import type {Metadata} from "next";
import {Geist, Geist_Mono, JetBrains_Mono, Ubuntu, Ubuntu_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {ModeToggle} from "@/components/ThemeSelector";
import {ReactNode} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const ubuntuSans = Ubuntu_Sans({
    variable: "--font-ubuntu-sans",
    subsets: ["latin", "latin-ext"],
    preload: true,
    fallback: ["ui-sans-serif", "sans-serif", "system-ui"],
})

const ubuntu = Ubuntu({
    variable: "--font-ubuntu",
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "700"],
    style: ["normal", "italic"],
    preload: true,
    fallback: ["ui-sans-serif", "sans-serif", "system-ui"],
})

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin", "latin-ext"],
    preload: true,
    fallback: ["monospace"]
})


export const metadata: Metadata = {
    title: "Advent Kalender 2025",
    robots: {
        index: false,
        follow: false,
    }
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${ubuntuSans.variable} ${ubuntu.variable} ${jetBrainsMono.variable} antialiased bg-background`}
        >
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
            <ModeToggle/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
