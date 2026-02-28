import React from "react";
import Image from "next/image";
import { openContactModal } from "@/utils/contact";

const HeroAtelier = () => {
    return (
        <section className="relative bg-atelier-bg overflow-hidden py-0 flex items-stretch min-h-[calc(100vh-6rem)] shadow-none border-0" id="hero">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center md:items-stretch">
                <div className="grid grid-cols-1 md:grid-cols-[7fr_9fr] items-center md:items-stretch gap-12 md:gap-20 w-full pt-24 md:pt-0">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left justify-center z-10 relative order-1 pt-0 pb-0 md:py-0">
                        <div className="inline-flex items-center gap-3 mb-4 md:mb-10">
                            <div className="h-px w-8 bg-atelier-text opacity-30"></div>
                            <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display">Phuket Makeup Artist</span>
                        </div>

                        <h1 className="font-chinese text-5xl md:text-5xl lg:text-6xl font-normal mb-8 md:mb-12 text-atelier-text tracking-tight" style={{ lineHeight: 1.2 }}>
                            普吉島私人<br />
                            <span className="text-atelier-accent">妝髮造型師</span>
                        </h1>

                        <p className="text-base md:text-lg text-atelier-muted font-chinese font-light mb-10 md:mb-14 tracking-normal max-w-xl mx-auto md:mx-0 leading-[1.9]">
                            主要服務海外婚禮、旅拍與重要場合。<br />一對一服務，細緻完成妝髮造型。
                        </p>

                        <div className="flex items-center mb-12 md:mb-0">
                            <button
                                onClick={openContactModal}
                                className="bg-atelier-cta text-atelier-bg px-12 md:px-14 py-5 md:py-5 font-medium text-[15px] text-center transition-all duration-300 hover:opacity-90 active:scale-95"
                            >
                                微信諮詢
                            </button>
                        </div>
                    </div>

                    <div className="relative order-2 w-full flex items-center justify-center md:justify-start">
                        {/* Desktop Version: 4:5 Aspect Ratio */}
                        <div className="hidden md:block relative aspect-[4/5] w-full max-h-[75vh] overflow-hidden portfolio-image-wrapper">
                            <Image
                                src="/images/hero/hero_desktop.jpg"
                                alt="Selected look desktop"
                                fill
                                priority
                                className="object-cover object-center atelier-img"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Mobile Version: 3:4 Aspect Ratio */}
                        <div className="block md:hidden relative aspect-[3/4] w-full overflow-hidden portfolio-image-wrapper">
                            <Image
                                src="/images/hero/hero_mobile.jpg"
                                alt="Selected look mobile"
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

export default HeroAtelier;
