import React from "react";

const faqs = [
    {
        question: "是否可以安排試妝？",
        answer: "可以安排試妝。一般建議於婚禮前1–2天進行，方便根據禮服與場地調整妝髮細節。",
    },
    {
        question: "是否可以前往普吉島以外地區？",
        answer: "主要服務於普吉島。如需前往其他島嶼或城市，可提前溝通安排。",
    },
    {
        question: "妝容是否適合亞洲女性？",
        answer: "妝容設計以亞洲女性的面部特點為基礎，強調自然、精緻與立體感，避免厚重妝效。",
    },
    {
        question: "是否提供全天跟妝服務？",
        answer: "可預約全天跟妝服務，包括補妝與造型調整。服務時長與內容可按婚禮或活動流程安排。",
    }
];

const FAQAtelier = () => {
    return (
        <section className="py-32 bg-atelier-bg border-t border-atelier-border" id="faq-atelier">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <span className="text-atelier-muted text-xs tracking-[0.4em] uppercase font-display mb-6 block">FAQ</span>
                    <h2 className="text-3xl lg:text-4xl font-chinese text-atelier-text leading-tight font-normal mb-8">
                        常見問題解答
                    </h2>
                    <p className="text-atelier-muted font-chinese text-sm max-w-xl mx-auto leading-relaxed font-light">
                        關於預約、試妝及服務細節的說明
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border-b border-atelier-border pb-6 transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                                <h3 className="font-chinese text-lg text-atelier-text font-medium group-hover:opacity-60 transition-opacity">
                                    {faq.question}
                                </h3>
                                <span className="text-atelier-text opacity-40 group-open:rotate-45 transition-transform duration-300">
                                    <span className="material-icons-round text-2xl">add</span>
                                </span>
                            </summary>
                            <div className="pt-4 pr-12">
                                <p className="text-atelier-muted font-chinese leading-relaxed font-light text-sm">
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
