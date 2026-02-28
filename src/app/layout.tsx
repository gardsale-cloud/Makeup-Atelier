import type { Metadata } from "next";
import { Manrope, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["300", "400", "500", "600", "700"],
});

const notoVariant = Noto_Sans_SC({
    subsets: ["latin"],
    variable: "--font-noto-sans-sc",
    weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
    title: "普吉島專業私人妝髮造型師 | Phuket Makeup Artist",
    description: "常駐普吉島的華人專業私人妝髮造型師，專為亞洲女性打造清透自然的高級妝感。專注婚禮、旅拍及活動妝髮服務。",
};

import ThemeSwitcherAtelier from "@/components/ThemeSwitcherAtelier";
import ContactModalAtelier from "@/components/ContactModalAtelier";
import PrivacyModalAtelier from "@/components/PrivacyModalAtelier";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-HK" className="scroll-smooth">
            <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`${manrope.variable} ${notoVariant.variable} antialiased font-display`}>
                {children}
                <ThemeSwitcherAtelier />
                <ContactModalAtelier />
                <PrivacyModalAtelier />
            </body>
        </html>
    );
}
