"use client";

import React, { useState } from "react";

const heroImages = [
    "/images/hero/hero.jpg",
    "/images/hero/hero_1.jpg",
    "/images/hero/hero_2.jpg",
    "/images/hero/hero_3.jpg",
    "/images/hero/hero_4.jpg",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
    };

    return (
        <section className="relative bg-background-light overflow-hidden h-[calc(100vh-5rem)] min-h-[600px] flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center py-10 lg:py-0 z-10 relative order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-light text-neutral-medium text-sm font-medium mb-8 w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Phuket Based Makeup Artist
                        </div>
                        <h1 className="font-chinese text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8 text-neutral-dark tracking-normal">
                            普吉島專業<br />
                            <span className="text-neutral-dark relative inline-block">
                                私人妝髮造型師
                            </span>
                        </h1>
                        <p className="text-lg text-neutral-medium mb-10 font-chinese tracking-normal max-w-xl leading-[1.8]">
                            常駐普吉島的華人專業私人妝髮造型師，專為亞洲女性打造清透自然的高級妝感。專注婚禮、旅拍及活動妝髮服務，呈現精緻、上鏡且持久的效果。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a className="bg-neutral-dark hover:bg-neutral-medium text-white px-10 py-4 rounded-full font-bold text-lg shadow-none transition-all text-center flex items-center justify-center gap-2 hover:opacity-90 w-fit" href="#contact">
                                <span className="material-icons-round">calendar_month</span>
                                查詢預預檔期
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-neutral-medium">
                            <div className="flex -space-x-3">
                                <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatars/avatar-1.jpg" />
                                <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatars/avatar-2.jpg" />
                                <img alt="Client Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/images/avatars/avatar-3.jpg" />
                            </div>
                            <p className="tracking-normal">常駐普吉島 · 專注亞洲女性妝髮 · 提供私人定制服務</p>
                        </div>
                    </div>

                    {/* Image Section with Slider Controls */}
                    <div className="w-full lg:w-1/2 relative aspect-square overflow-hidden group order-1 lg:order-2">
                        {/* Blending Overlays */}
                        <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-black/[0.03]"></div>
                        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background-light via-transparent to-transparent opacity-20"></div>

                        <img
                            key={currentIndex}
                            alt="Selected makeup look"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[10%] contrast-[98%] brightness-[101%] transition-opacity duration-700"
                            src={heroImages[currentIndex]}
                        />

                        {/* Soft Edge Blend */}
                        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_80px_rgba(248,247,246,0.3)]"></div>

                        {/* Temporary Helper Label */}
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-20">
                            Photo {currentIndex + 1} of {heroImages.length}
                        </div>

                        {/* Slider Controls */}
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all"
                                aria-label="Previous photo"
                            >
                                <span className="material-icons-round">chevron_left</span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all"
                                aria-label="Next photo"
                            >
                                <span className="material-icons-round">chevron_right</span>
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                            {heroImages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white w-6" : "bg-white/40"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
