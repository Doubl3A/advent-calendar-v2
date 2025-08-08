import type {Metadata} from "next";
import {JetBrains_Mono, Ubuntu, Ubuntu_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/providers/theme-provider";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/Footer";

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
            className={cn(`${ubuntuSans.variable} ${ubuntu.variable} ${jetBrainsMono.variable}`, "w-full h-full min-h-screen flex flex-col")}
        >
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
            <Header/>
            <main
                className="flex-auto w-full m-auto my-0 max-w-6xl [&>*]:mx-4">
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
