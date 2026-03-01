"use client";

import React from "react";
import Image from "next/image";
import { openContactModal } from "@/utils/contact";

const HeroAtelierEn = () => {
    return (
        <section className="relative bg-atelier-bg overflow-hidden py-0 flex items-stretch min-h-[calc(100vh-6rem)] shadow-none border-0" id="hero">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center md:items-stretch">
                <div className="grid grid-cols-1 md:grid-cols-[7fr_9fr] items-center md:items-stretch gap-12 md:gap-20 w-full pt-24 md:pt-0">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center z-10 relative order-1 pt-0 pb-0 md:py-0">
                        <div className="inline-flex items-center gap-3 mb-4 md:mb-10">
                            <div className="h-px w-8 bg-atelier-text opacity-30"></div>
                            <span className="text-atelier-accent text-xs tracking-[0.2em] uppercase font-display">中文 · Mandarin-Speaking</span>
                        </div>

                        <h1 className="font-display text-5xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-12 text-atelier-text tracking-tight uppercase" style={{ lineHeight: 1.1 }}>
                            Phuket Private<br />
                            <span className="text-atelier-accent">Makeup Artist</span>
                        </h1>

                        <p className="text-base md:text-lg text-atelier-muted font-display font-light mb-10 md:mb-14 tracking-normal max-w-xl mx-auto md:mx-0 leading-[1.8]">
                            Refined makeup and hair styling for weddings and photography. Personalized one-on-one service.
                        </p>

                        <div className="flex items-center mb-12 md:mb-0">
                            <button
                                onClick={openContactModal}
                                className="bg-atelier-cta text-atelier-bg px-12 md:px-14 py-5 md:py-5 font-medium text-xs tracking-widest uppercase text-center transition-all duration-300 hover:opacity-90 active:scale-95 cursor-pointer"
                            >
                                INQUIRE VIA WECHAT
                            </button>
                        </div>
                    </div>

                    <div className="relative order-2 w-full flex items-center justify-center md:justify-start">
                        <div className="hidden md:block relative aspect-[4/5] w-full max-h-[75vh] overflow-hidden portfolio-image-wrapper">
                            <Image
                                src="/images/hero/hero_desktop.jpg"
                                alt="Phuket Bridal Styling"
                                fill
                                priority
                                className="object-cover object-center atelier-img"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="block md:hidden relative aspect-[3/4] w-full overflow-hidden portfolio-image-wrapper">
                            <Image
                                src="/images/hero/hero_mobile.jpg"
                                alt="Phuket Bridal Styling Mobile"
                                fill
                                priority
                                className="object-cover object-center atelier-img"
                                sizes="100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAtelierEn;
