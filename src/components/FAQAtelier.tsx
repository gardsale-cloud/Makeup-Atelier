"use client";

import React from "react";

const faqs = [
    {
        question: "是否可以只預約單一妝髮服務？",
        answer: "可按實際需求預約單一造型或全天跟妝服務，形式可靈活調整。",
        open: true
    },
    {
        question: "是否提供伴娘或家人妝髮？",
        answer: "可提供伴娘或家人妝髮服務。如需多人造型，請提前說明以便確認時間。",
        open: false
    },
    {
        question: "是否提供試妝服務？",
        answer: "提供婚禮妝髮試妝服務。試妝可提前溝通整體造型方向，並根據當日妝感進行細部調整，讓婚禮當天更安心自然。",
        open: false
    },
    {
        question: "是否只服務普吉島地區？",
        answer: "主要服務於普吉島。如需前往其他島嶼或城市，可提前溝通。",
        open: false
    },
    {
        question: "建議提前多久預約？",
        answer: "為維持每場服務的專注與品質，採預約制安排。若已確認日期，建議儘早聯繫確認檔期。",
        open: false
    }
];

const FAQAtelier = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="faq">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24 text-center">
                    <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Frequently Asked Questions</span>
                    <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                        常見問題<span className="serif-font italic text-atelier-accent">解答</span>
                    </h2>
                    <p className="text-atelier-muted font-chinese font-light text-base max-w-xl mx-auto leading-relaxed">
                        關於預約與服務細節的說明。
                    </p>
                    <div className="h-px w-20 bg-atelier-accent mx-auto mt-8"></div>
                </div>

                <div className="space-y-4 md:space-y-8">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group border-b border-atelier-border pb-6"
                            open={faq.open}
                        >
                            <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                                <h3 className="font-chinese text-base md:text-xl text-atelier-text font-medium transition-opacity duration-300 ease-out hover:opacity-60">
                                    {faq.question}
                                </h3>
                                <span className="text-atelier-text opacity-40 group-open:rotate-45 transition-transform duration-300 ease-out">
                                    <span className="text-lg font-light">+</span>
                                </span>
                            </summary>
                            <div className="pt-4 pr-12">
                                <p className="text-atelier-muted font-chinese font-light text-base leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAtelier;
