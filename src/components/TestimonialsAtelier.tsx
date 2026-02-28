"use client";

import React from "react";

const testimonials = [
    {
        name: "Lydia Chen",
        platform: "小红书",
        date: "2024.06",
        location: "Singapore",
        text: "“太感谢你了，多亏有你我们的婚礼才举办的这么顺利又漂亮！从头到尾你都特别细心，专业，而且超级好相处，我们很幸运能找到你做我们的化妆师。一开始没有试妆我还挺担心的，结果你化的妆简直完美，完全就是我心里想要的效果，而且比我想象中还要好！真的是太感谢你了。”",
        staggered: false
    },
    {
        name: "Kayla Wong",
        platform: "小红书",
        date: "2024.08",
        location: "Canada",
        text: "“你好！想要亲自谢谢你，我真的超满意你帮我化的妆。所有宾客都说我的妆真的好好看，好自然，好透亮。也要谢谢你全天都跟进我们的妆容，又帮忙拉裙尾，又打灯，又不停平复我忐忑的心情。”",
        staggered: true
    },
    {
        name: "Janelle Tan",
        platform: "小红书",
        date: "2024.10",
        location: "Hong Kong",
        text: "“能够遇见你实在是太太太幸运啦～我的婚礼最强辅助非你莫属！有你属实是太舒心，太省心了。远远不止是化妆师，还是造型师，服装師，裁缝…最重要的是，婚礼当天你提供了無限的情緒價值，讓我們都無比的安心！謝謝你的專業，細心，細緻，你簡直太寶藏了！”",
        staggered: false
    },
    {
        name: "Emma Huang",
        platform: "小红书",
        date: "2024.12",
        location: "Taiwan",
        text: "“婚礼当天真的很安心，从早到晚你都在细心照顾每一个细节，帮我调整造型、整理裙摆、确认妆容状态，让我可以专心享受属于自己的时刻。所有造型都很适合我，自然又有质感，拍照出来也非常好看。有你在身边，一切都变得轻松而放心，谢谢你的专业与温柔陪伴，让这一天更加完整而难忘。”",
        staggered: true
    }
];

const TestimonialsAtelier = () => {
    return (
        <section className="py-24 pb-24 md:pt-40 md:pb-32 bg-atelier-bg" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-20">
                    <div className="md:col-span-4 md:sticky md:top-32 md:h-fit">
                        <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Client Reviews</span>
                        <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                            客戶回饋
                        </h2>
                        <p className="text-atelier-muted font-chinese font-light text-base leading-relaxed max-w-xl">
                            來自婚禮與旅拍客戶的真實回饋，關於溝通與妝髮服務。
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
                                        <h3 className="font-chinese font-normal text-xl text-atelier-text mb-3">{item.name}</h3>
                                        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-chinese font-light text-atelier-muted/60">
                                            <span>{item.platform}</span>
                                            <span className="text-atelier-accent/40">•</span>
                                            <span>{item.date}</span>
                                            <span className="text-atelier-accent/40">•</span>
                                            <span>{item.location}</span>
                                        </div>
                                    </header>

                                    <div className="flex-grow">
                                        <p className="text-base text-atelier-muted leading-relaxed font-chinese-sc font-light">
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

export default TestimonialsAtelier;
