"use client";

import React, { useState } from "react";
import { getAssetPath } from "@/utils/paths";

const heroImages = [
    getAssetPath("/images/hero/hero.jpg"),
    getAssetPath("/images/hero/hero_1.jpg"),
    getAssetPath("/images/hero/hero_2.jpg"),
    getAssetPath("/images/hero/hero_3.jpg"),
    getAssetPath("/images/hero/hero_4.jpg"),
];

import { openContactModal } from "@/utils/contact";

const HeroAtelier = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <section className="relative bg-atelier-bg overflow-hidden pt-4 pb-16 flex items-center min-h-[calc(100vh-6rem)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 relative order-2 lg:order-1">
                        <div className="inline-flex items-center gap-3 mb-10">
                            <div className="h-px w-8 bg-atelier-text opacity-30"></div>
                            <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display">Phuket Makeup Artist</span>
                        </div>

                        <h1 className="font-chinese text-4xl lg:text-5xl xl:text-6xl font-normal leading-[1.2] mb-10 text-atelier-text tracking-tight">
                            普吉島專業<br />
                            <span className="italic font-serif text-atelier-accent">私人妝髮造型師</span>
                        </h1>

                        <p className="text-lg text-atelier-muted mb-12 font-chinese tracking-normal max-w-lg leading-relaxed font-light">
                            常駐普吉島的華人專業私人妝髮造型師，專為亞洲女性打造清透自然的高級妝感。專注婚禮、旅拍及活動妝髮服務，呈現精緻、上鏡且持久的效果。
                        </p>

                        <div className="flex items-center mb-12">
                            <button
                                onClick={openContactModal}
                                className="bg-atelier-cta text-atelier-bg px-10 py-4 font-medium text-sm text-center transition-all hover:opacity-90 active:scale-95"
                            >
                                查詢預約檔期
                            </button>
                        </div>

                        <p className="text-[10px] text-atelier-muted uppercase tracking-[0.2em] font-display opacity-60">
                            常駐普吉島 · 專注亞洲女性妝髮 · 提供私人定制服務
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 relative aspect-[4/5] overflow-hidden order-1 lg:order-2 lg:pr-8">
                        <img
                            key={currentIndex}
                            alt="Selected look"
                            className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%] contrast-[95%] brightness-[102%] transition-opacity duration-300 ease-out"
                            src={heroImages[currentIndex]}
                        />

                        {/* Soft blend overlay - subtle shadow to blend edges */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(246,244,241,0.2)]"></div>

                        {/* Minimal Slider Controls */}
                        <div className="absolute bottom-8 right-8 flex items-center gap-6 z-20">
                            <button
                                onClick={prevSlide}
                                className="text-atelier-text opacity-40 hover:opacity-100 transition-opacity duration-300 ease-out"
                                aria-label="Previous"
                            >
                                <span className="text-2xl">←</span>
                            </button>
                            <span className="text-atelier-text text-xs tracking-widest font-display opacity-40">
                                {currentIndex + 1} / {heroImages.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                className="text-atelier-text opacity-40 hover:opacity-100 transition-opacity duration-300 ease-out"
                                aria-label="Next"
                            >
                                <span className="text-2xl">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAtelier;
