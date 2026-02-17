import React from "react";

const faqs = [
    {
        question: "是否可以安排試妝？",
        answer: "可以安排試妝。一般建議於婚禮前1–2天進行，方便根據禮服與場地調整妝髮細節。",
        icon: "calendar_month"
    },
    {
        question: "是否可以前往普吉島以外地區？",
        answer: "主要服務於普吉島。如需前往其他島嶼或城市，可提前溝通安排。",
        icon: "payments"
    },
    {
        question: "妝容是否適合亞洲女性？",
        answer: "妝容設計以亞洲女性的面部特點為基礎，強調自然、精緻與立體感，避免厚重妝效。",
        icon: "local_taxi"
    },
    {
        question: "是否提供全天跟妝服務？",
        answer: "可預約全天跟妝服務，包括補妝與造型調整。服務時長與內容可按婚禮或活動流程安排。",
        icon: "brush"
    }
];

const FAQ = () => {
    return (
        <section className="py-28 bg-white" id="faq">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 font-display">FAQ</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold font-chinese text-neutral-dark mb-6">
                        常見問題解答
                    </h2>
                    <p className="text-neutral-medium font-chinese text-lg mb-12 font-normal leading-relaxed max-w-xl mx-auto">
                        關於預約、試妝及服務細節的說明
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group bg-background-light rounded-lg border border-border-light overflow-hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <div className="flex items-center gap-4">
                                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary border border-border-light">
                                        <span className="material-icons-round">{faq.icon}</span>
                                    </span>
                                    <h3 className="font-chinese font-medium text-lg text-neutral-dark">{faq.question}</h3>
                                </div>
                                <span className="material-icons-round text-neutral-medium group-open:rotate-180 transition-all duration-300">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 pt-2 pl-[4.5rem] ml-6 mb-4 mr-6 border-t border-border-light/50">
                                <p className="text-neutral-medium font-chinese leading-relaxed font-normal">
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

export default FAQ;
