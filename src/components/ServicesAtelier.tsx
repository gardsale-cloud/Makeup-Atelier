"use client";

import React from "react";
import { openContactModal } from "@/utils/contact";

const ServicesAtelier = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="services">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-24 md:mb-24">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs tracking-[0.3em] text-atelier-accent uppercase font-display">Styling Services</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                        妝髮<span className="serif-font italic text-atelier-accent">服務</span>項目
                    </h2>
                    <p className="text-atelier-muted font-chinese font-light text-[15px] sm:text-base max-w-xl leading-relaxed">
                        根據不同場合與拍攝需求，設計合適的妝髮造型。
                    </p>
                    <div className="h-px w-20 bg-atelier-accent mt-8"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-28 md:gap-y-0">
                    {/* Left: Main Service (7 cols) */}
                    <div className="md:col-span-7 flex flex-col pr-0 md:pr-16 relative group">
                        <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-atelier-border/40"></div>
                        <div className="mb-0">
                            <span className="block text-8xl md:text-7xl font-serif text-atelier-accent opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 mb-4 font-normal select-none italic">
                                01
                            </span>
                            <h3 className="text-2xl md:text-4xl font-chinese text-atelier-text mb-2 font-normal">婚禮妝髮造型</h3>
                            <div className="text-[10px] sm:text-xs tracking-[0.2em] text-atelier-accent uppercase font-display mb-8">
                                Wedding Makeup & Hair
                            </div>
                            <p className="text-atelier-muted font-chinese font-light text-base leading-[1.9] mb-8 md:mb-12 max-w-lg">
                                服務海外婚禮新娘，根據禮服、場地與儀式流程設計整體妝髮方向。可預約試妝與全天跟妝服務。
                            </p>
                        </div>
                        <div className="flex flex-row items-end justify-between gap-4 pt-8 border-t border-atelier-border w-full md:w-[90%]">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest text-atelier-muted opacity-60 mb-1 font-display">Starting From</span>
                                <span className="text-lg font-display italic text-atelier-text">
                                    ฿ 18,000 <span className="text-xs font-chinese text-atelier-muted ml-0.5">起</span>
                                </span>
                            </div>
                            <button
                                onClick={openContactModal}
                                className="inline-flex items-center text-xs tracking-widest text-atelier-text hover:opacity-60 transition-opacity pb-1 border-b border-atelier-border font-display uppercase"
                            >
                                查詢服務檔期 <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5 inline-block">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Two secondary services (5 cols) */}
                    <div className="md:col-span-5 flex flex-col gap-28 md:gap-20 pl-0 md:pl-12 pt-0 md:pt-0 md:-mt-20">
                        {/* Service 2 */}
                        <div className="flex flex-col justify-between group">
                            <div>
                                <span className="block text-8xl md:text-4xl font-serif text-atelier-accent opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 mb-4 font-normal select-none italic">
                                    02
                                </span>
                                <h3 className="text-[20px] sm:text-2xl font-chinese text-atelier-text mb-1 font-normal">旅拍 / 婚紗攝影妝髮</h3>
                                <div className="text-[10px] sm:text-xs tracking-[0.2em] text-atelier-accent uppercase font-display mb-5">
                                    Pre-Wedding styling
                                </div>
                                <p className="text-atelier-muted font-chinese font-light text-base leading-relaxed mb-8">
                                    適合婚紗攝影與旅拍拍攝。妝髮設計會考慮拍攝光線、場景與鏡頭呈現效果。可提供造型更換與補妝。
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-2 pt-6 border-t border-atelier-border">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-atelier-muted opacity-60 mb-1 font-display">Starting From</span>
                                    <span className="text-base font-display italic text-atelier-text">
                                        ฿ 4,000 <span className="text-xs font-chinese text-atelier-muted ml-1">起</span>
                                    </span>
                                </div>
                                <button
                                    onClick={openContactModal}
                                    className="inline-flex items-center text-xs tracking-widest text-atelier-text hover:opacity-60 transition-opacity pb-1 border-b border-atelier-border font-display uppercase"
                                >
                                    查詢服務檔期 <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5 inline-block">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex flex-col justify-between group">
                            <div>
                                <span className="block text-8xl md:text-4xl font-serif text-atelier-accent opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 mb-4 font-normal select-none italic">
                                    03
                                </span>
                                <h3 className="text-[20px] sm:text-2xl font-chinese text-atelier-text mb-1 font-normal">活動及晚宴妝髮</h3>
                                <div className="text-[10px] sm:text-xs tracking-[0.2em] text-atelier-accent uppercase font-display mb-5">
                                    Event & Evening Styling
                                </div>
                                <p className="text-atelier-muted font-chinese font-light text-base leading-relaxed mb-8">
                                    適用於晚宴、品牌活動與正式場合。妝容方向依活動性質與服裝風格調整。可提供上門妝髮服務。
                                </p>
                            </div>
                            <div className="flex flex-row items-end justify-between gap-2 pt-6 border-t border-atelier-border">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-atelier-muted opacity-60 mb-1 font-display">Starting From</span>
                                    <span className="text-base font-display italic text-atelier-text">
                                        ฿ 4,000 <span className="text-xs font-chinese text-atelier-muted ml-1">起</span>
                                    </span>
                                </div>
                                <button
                                    onClick={openContactModal}
                                    className="inline-flex items-center text-xs tracking-widest text-atelier-text hover:opacity-60 transition-opacity pb-1 border-b border-atelier-border font-display uppercase"
                                >
                                    查詢服務檔期 <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5 inline-block">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesAtelier;
