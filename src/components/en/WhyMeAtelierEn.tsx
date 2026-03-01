"use client";

import React from "react";

const whyMeItems = [
    {
        title: "Private One-on-One Service",
        description: "Direct communication throughout preparation. Each detail is discussed and confirmed in advance to ensure confidence on the day.",
        align: "start"
    },
    {
        title: "Local Expertise",
        description: "Familiar with hotels, private villas, and beachfront venues in Phuket. Styling is adapted to humidity, lighting, and environment.",
        align: "end"
    },
    {
        title: "Understanding of Asian Features",
        description: "Experienced with Asian skin tones, facial structure, and aesthetic balance.",
        align: "start"
    },
    {
        title: "On-Location Service",
        description: "Professional service provided at your hotel, villa, or venue for a smooth and comfortable experience.",
        align: "end"
    }
];

const WhyMeAtelierEn = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="why-me">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="mb-14">
                    <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Professional Approach</span>
                    <h2 className="text-4xl md:text-5xl font-display text-atelier-text leading-tight font-normal mb-8 uppercase tracking-tight">
                        Why Choose Me
                    </h2>
                    <p className="text-atelier-muted font-display font-light text-[15px] sm:text-base max-w-xl mx-auto leading-relaxed">
                        Dedicated to providing a refined, precise styling experience for weddings and travel shoots.
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
                            <h3 className="text-lg font-display text-atelier-text mb-4 uppercase tracking-widest font-medium">{item.title}</h3>
                            <p
                                className="text-atelier-muted font-display text-[15px] font-light leading-relaxed max-w-md"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMeAtelierEn;
