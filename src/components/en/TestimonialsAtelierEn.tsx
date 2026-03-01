"use client";

import React from "react";

const testimonials = [
    {
        name: "Lydia Chen",
        platform: "小紅書",
        date: "2024.06",
        location: "Singapore",
        text: "“Thank you so much! Everything went so smoothly and beautifully. You were meticulous and professional throughout. I was worried since we didn't do a trial, but the look was perfect—even better than I imagined.”",
        staggered: false
    },
    {
        name: "Kayla Wong",
        platform: "小紅書",
        date: "2024.08",
        location: "Canada",
        text: "“Hello! I wanted to personally thank you. I was so happy with the makeup—all the guests said it looked natural and radiant. Thank you for following through all day, helping with my gown, and keeping me calm.”",
        staggered: true
    },
    {
        name: "Janelle Tan",
        platform: "小紅書",
        date: "2024.10",
        location: "Hong Kong",
        text: "“能够遇见你实在是太太太幸运啦～我的婚礼最强辅助非你莫属！有你属实是太舒心，太省心了。远远不止是化妆师，还是造型师，服装師，裁缝…最重要的是，婚礼当天你提供了無限的情緒價值，讓我們都無比的安心！謝謝你的專業，細心，細緻，你簡直太寶藏了！”",
        staggered: false
    },
    {
        name: "Emma Huang",
        platform: "小紅書",
        date: "2024.12",
        location: "Taiwan",
        text: "“婚礼当天真的很安心，从早到晚你都在细心照顾每一个细节，帮我调整造型、整理裙摆、确认妆容状态，让我可以专心享受属于自己的时刻。所有造型都很适合我，自然又有质感，拍照出来也非常好看。有你在身边，一切都变得轻松而放心，谢谢你的专业与温柔陪伴，让这一天更加完整而难忘。”",
        staggered: true
    }
];

const TestimonialsAtelierEn = () => {
    return (
        <section className="py-24 pb-24 md:pt-40 md:pb-32 bg-atelier-bg" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-20">
                    <div className="md:col-span-4 md:sticky md:top-32 md:h-fit">
                        <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Guest Experiences</span>
                        <h2 className="text-4xl md:text-5xl font-display text-atelier-text leading-tight font-normal mb-8 uppercase tracking-tight">
                            Kind <span className="serif-font italic text-atelier-accent">Regards</span>
                        </h2>
                        <p className="text-atelier-muted font-display font-light text-base leading-relaxed max-w-xl">
                            Reflections from weddings and photography clients on styling and communication.
                        </p>
                        <div className="h-px w-20 bg-atelier-accent mt-8"></div>
                    </div>

                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 md:gap-x-32 md:gap-y-8">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className={`group relative flex flex-col ${item.staggered ? "md:mt-48" : ""}`}
                                >
                                    <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-px bg-atelier-border/40"></div>
                                    <header className="flex flex-col mb-10">
                                        <h3 className="font-display font-medium text-lg text-atelier-text mb-3 uppercase tracking-widest">{item.name}</h3>
                                        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-display font-light text-atelier-muted/60">
                                            <span>{item.platform}</span>
                                            <span className="text-atelier-accent/40">•</span>
                                            <span>{item.date}</span>
                                            <span className="text-atelier-accent/40">•</span>
                                            <span>{item.location}</span>
                                        </div>
                                    </header>

                                    <div className="flex-grow">
                                        <p className="text-base text-atelier-muted leading-relaxed font-display font-light italic font-chinese">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAtelierEn;
