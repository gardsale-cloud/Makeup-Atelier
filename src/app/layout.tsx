import type { Metadata } from "next";
import { Manrope, Noto_Sans_SC, Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ContactModalAtelier from "@/components/ContactModalAtelier";
import PrivacyModalAtelier from "@/components/PrivacyModalAtelier";
import ClientTracker from "@/components/ClientTracker";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const notoVariantSC = Noto_Sans_SC({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-noto-sc",
    display: "swap",
    preload: false,
});

const notoVariantHK = Noto_Sans_HK({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-noto-hk",
    display: "swap",
    preload: false,
});

export const metadata: Metadata = {
    title: "Phuket Private Makeup Artist | 普吉島私人妝髮造型師",
    description: "Phuket Private Makeup Artist for overseas weddings, travel shoots, and special occasions. One-on-one service with a focus on quality and detail.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-HK" className="scroll-smooth">
            <head>
                {/* Preconnect for fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Yandex.Metrika counter */}
                <Script id="yandex-metrika" strategy="lazyOnload">
                    {`
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
                        ym(92936100, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
                    `}
                </Script>

                {/* Meta Pixel Code */}
                <Script id="fb-pixel" strategy="lazyOnload">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '667496576361531');
                        fbq('track', 'PageView');
                    `}
                </Script>

                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11100467416" strategy="lazyOnload" />
                <Script id="google-tag" strategy="lazyOnload">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'AW-11100467416');
                    `}
                </Script>
            </head>
            <body className={`${manrope.variable} ${notoVariantSC.variable} ${notoVariantHK.variable} antialiased font-display`}>
                <ClientTracker />
                {children}
                <ContactModalAtelier />
                <PrivacyModalAtelier />
            </body>
        </html>
    );
}
