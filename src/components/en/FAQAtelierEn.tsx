"use client";

import React from "react";

const faqs = [
    {
        question: "Can I book a single styling session?",
        answer: "Yes. Flexible scheduling is available for single sessions, pre-wedding photography, or full-day wedding accompaniment.",
        open: true
    },
    {
        question: "Do you provide styling for group members?",
        answer: "Yes, styling for bridesmaids or family members is available. Please indicate this in advance for time coordination.",
        open: false
    },
    {
        question: "Is a trial makeup session available?",
        answer: "Dedicated wedding trials are available to refine the aesthetic direction and ensure confidence for your ceremony.",
        open: false
    },
    {
        question: "Do you provide services outside Phuket?",
        answer: "The primary service area is Phuket. Other locations or nearby islands may be requested via consultation.",
        open: false
    },
    {
        question: "How far in advance should I book?",
        answer: "I operate on an appointment-only basis to maintain quality. Early reservation is recommended if your date is fixed.",
        open: false
    }
];

const FAQAtelierEn = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="faq">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24 text-center">
                    <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Clarifications</span>
                    <h2 className="text-4xl md:text-5xl font-display text-atelier-text leading-tight font-normal mb-8 uppercase tracking-tight">
                        Common <span className="serif-font italic text-atelier-accent">Inquiries</span>
                    </h2>
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
                                <h3 className="font-display text-base md:text-xl text-atelier-text font-medium transition-opacity duration-300 ease-out hover:opacity-60 uppercase tracking-wide cursor-pointer">
                                    {faq.question}
                                </h3>
                                <span className="text-atelier-text opacity-40 group-open:rotate-45 transition-transform duration-300 ease-out">
                                    <span className="text-lg font-light">+</span>
                                </span>
                            </summary>
                            <div className="pt-4 pr-12">
                                <p className="text-atelier-muted font-display font-light text-base leading-relaxed">
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

export default FAQAtelierEn;
