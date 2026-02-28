"use client";

import React from "react";

const whyMeItems = [
    {
        title: "一對一服務",
        description: "一對一溝通，<br />根據服裝與場合細緻調整妝髮細節.",
        align: "start"
    },
    {
        title: "熟悉環境",
        description: "熟悉普吉島婚禮場地與自然光線條件，<br />能根據不同環境調整妝髮方向。",
        align: "end"
    },
    {
        title: "熟悉亞洲女性審美與文化",
        description: "熟悉亞洲女性臉型比例與審美方向。<br />以中文溝通，熟悉華人婚禮流程與妝髮細節需求。",
        align: "start"
    },
    {
        title: "提供上門服務",
        description: "可前往酒店、別墅或活動場地提供妝髮服務，<br />讓整體流程更為安心與從容。",
        align: "end"
    }
];

const WhyMeAtelier = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="why-me">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Why Me</span>
                    <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                        合作的<span className="serif-font italic text-atelier-accent">理由</span>
                    </h2>
                    <p className="text-atelier-muted font-chinese font-light text-[15px] sm:text-base max-w-xl mx-auto leading-relaxed">
                        針對海外婚禮與重要場合，提供細緻而有條理的妝髮服務。
                    </p>
                    <div className="h-px w-20 bg-atelier-accent mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-x-32 md:gap-y-24">
                    {whyMeItems.map((item, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${item.align === "end" ? "items-end md:items-start text-right md:text-left" : "items-start text-left"} bg-transparent`}
                        >
                            <div className="w-8 h-px bg-atelier-accent mb-6 opacity-60"></div>
                            <h3 className="text-2xl font-chinese text-atelier-text mb-3 font-normal">{item.title}</h3>
                            <p
                                className="text-atelier-muted font-chinese text-base font-light leading-relaxed max-w-md"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMeAtelier;
