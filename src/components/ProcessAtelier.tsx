"use client";

import React from "react";

const ProcessAtelier = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-atelier-bg" id="process">
            {/* Background Grid Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute left-[20%] top-0 h-full w-px bg-atelier-border/40"></div>
                <div className="absolute left-[50%] top-0 h-full w-px bg-atelier-border/40"></div>
                <div className="absolute left-[80%] top-0 h-full w-px bg-atelier-border/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 md:mb-32 relative">
                    <span className="text-xs tracking-[0.3em] text-atelier-accent uppercase font-display block mb-6">Booking Process</span>
                    <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text font-normal mb-5">預約<span className="serif-font italic text-atelier-accent">流程</span></h2>
                    <p className="text-atelier-muted font-chinese text-base font-light max-w-xl mx-auto leading-relaxed">由初步查詢至服務當天，流程清晰明確。</p>
                    <div className="h-px w-20 bg-atelier-accent mx-auto mt-8"></div>
                </div>

                <div className="relative w-full max-w-5xl mx-auto">
                    {/* Step 01 */}
                    <div className="flex flex-col relative mb-32 md:mb-0 md:ml-0 md:w-1/3 group items-start text-left">
                        <div className="absolute -top-10 -left-4 md:-top-24 md:-left-12 font-serif italic text-[80px] md:text-[180px] text-atelier-accent opacity-[0.1] leading-none select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.2]">01</div>
                        <div className="relative z-10 pl-6 md:pl-8 pt-6 md:pt-8 border-l border-atelier-border group-hover:border-atelier-accent transition-colors duration-500">
                            <h3 className="text-2xl font-medium text-atelier-text font-chinese font-normal mb-2 md:mb-3">微信查詢檔期</h3>
                            <p className="text-base text-atelier-muted font-chinese font-light leading-relaxed">
                                提供日期、地點與服務類型，<br />確認可預約的檔期。
                            </p>
                        </div>
                    </div>

                    {/* Step 02 */}
                    <div className="flex flex-col relative mb-32 md:mb-0 md:translate-x-[120%] md:translate-y-16 md:w-1/3 group items-end md:items-start text-right md:text-left">
                        <div className="absolute -top-10 -right-4 md:-top-24 md:-left-12 md:right-auto font-serif italic text-[80px] md:text-[180px] text-atelier-accent opacity-[0.1] leading-none select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.2]">02</div>
                        <div className="relative z-10 pr-6 md:pr-0 pl-0 md:pl-8 pt-6 md:pt-8 border-r md:border-r-0 md:border-l border-atelier-border group-hover:border-atelier-accent transition-colors duration-500">
                            <h3 className="text-2xl font-medium text-atelier-text font-chinese font-normal mb-2 md:mb-3">確認內容與造型</h3>
                            <p className="text-base text-atelier-muted font-chinese font-light leading-relaxed">
                                溝通需求、風格及時間安排，<br />確定服務內容與費用。
                            </p>
                        </div>
                    </div>

                    {/* Step 03 */}
                    <div className="flex flex-col relative mb-32 md:mb-0 md:translate-x-[40%] md:translate-y-32 md:w-1/3 group items-start text-left">
                        <div className="absolute -top-10 -left-4 md:-top-24 md:-left-12 font-serif italic text-[80px] md:text-[180px] text-atelier-accent opacity-[0.1] leading-none select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.2]">03</div>
                        <div className="relative z-10 pl-6 md:pl-8 pt-6 md:pt-8 border-l border-atelier-border group-hover:border-atelier-accent transition-colors duration-500">
                            <h3 className="text-2xl font-medium text-atelier-text font-chinese font-normal mb-2 md:mb-3">支付訂金確認</h3>
                            <p className="text-base text-atelier-muted font-chinese font-light leading-relaxed">
                                確認訂金後，正式保留當日服務檔期。
                            </p>
                        </div>
                    </div>

                    {/* Step 04 */}
                    <div className="flex flex-col relative md:translate-x-[180%] md:translate-y-48 md:w-1/3 group items-end md:items-start text-right md:text-left pb-8 md:pb-64">
                        <div className="absolute -top-10 -right-4 md:-top-24 md:-left-12 md:right-auto font-serif italic text-[80px] md:text-[180px] text-atelier-accent opacity-[0.1] leading-none select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.2]">04</div>
                        <div className="relative z-10 pr-6 md:pr-0 pl-0 md:pl-8 pt-6 md:pt-8 border-r md:border-r-0 md:border-l border-atelier-border group-hover:border-atelier-accent transition-colors duration-500">
                            <h3 className="text-2xl font-medium text-atelier-text font-chinese font-normal mb-2 md:mb-3">服務當天</h3>
                            <p className="text-base text-atelier-muted font-chinese font-light leading-relaxed">
                                依約定時間到達，完成當天妝髮造型。
                            </p>
                        </div>
                    </div>

                    {/* S-Curve Background Line */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block opacity-20 z-0" style={{ height: "140%" }}>
                        <path
                            className="text-atelier-border"
                            d="M 160 100 C 160 250, 600 200, 600 350 S 300 450, 300 600 S 800 700, 800 850"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default ProcessAtelier;
