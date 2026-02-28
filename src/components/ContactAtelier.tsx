"use client";

import React from "react";
import { openContactModal } from "@/utils/contact";

const ContactAtelier = () => {
    return (
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center relative overflow-hidden bg-atelier-bg" id="contact">
            <div className="z-10 max-w-2xl mx-auto">
                <p className="text-xs tracking-[0.3em] uppercase text-atelier-accent mb-6 font-display">Inquiry</p>
                <h2 className="text-4xl md:text-6xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                    <span className="text-atelier-accent italic serif-font">私人</span>妝髮諮詢
                </h2>
                <p className="text-atelier-muted font-chinese font-light max-w-md mx-auto leading-relaxed">
                    如有任何妝髮造型或相關問題，歡迎與我聯絡。
                </p>
                <div className="h-px w-20 bg-atelier-accent mx-auto mt-10"></div>
                <div className="pt-10">
                    <button
                        onClick={openContactModal}
                        className="inline-block bg-atelier-cta text-atelier-bg px-14 py-5 text-sm md:text-[15px] tracking-[0.2em] transition-all duration-300 hover:opacity-90 font-medium uppercase cursor-pointer"
                    >
                        微信諮詢
                    </button>
                </div>
                <p className="text-[10px] text-atelier-muted/50 pt-4 tracking-[0.2em] font-display uppercase font-light">
                    一般於當日內回覆
                </p>
            </div>
        </section>
    );
};

export default ContactAtelier;
