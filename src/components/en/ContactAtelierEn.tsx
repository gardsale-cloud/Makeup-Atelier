"use client";

import React from "react";
import { openContactModal } from "@/utils/contact";

const ContactAtelierEn = () => {
    return (
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center relative overflow-hidden bg-atelier-bg" id="contact">
            <div className="z-10 max-w-2xl mx-auto">
                <p className="text-xs tracking-[0.3em] uppercase text-atelier-accent mb-6 font-display">Contact</p>
                <h2 className="text-4xl md:text-6xl font-display text-atelier-text leading-tight font-normal mb-5 uppercase">
                    <span className="text-atelier-accent italic serif-font">Private</span> Consultation
                </h2>
                <p className="text-atelier-muted font-display font-light max-w-md mx-auto leading-relaxed">
                    For any styling questions or bookings, please contact me via WeChat.
                </p>
                <div className="h-px w-20 bg-atelier-accent mx-auto mt-10"></div>
                <div className="pt-10">
                    <button
                        onClick={openContactModal}
                        className="inline-block bg-atelier-cta text-atelier-bg px-14 py-5 text-[15px] tracking-[0.2em] transition-all duration-300 hover:opacity-90 font-medium uppercase font-display cursor-pointer"
                    >
                        INQUIRE VIA WECHAT
                    </button>
                </div>
                <p className="text-xs text-atelier-muted/60 pt-4 tracking-[0.3em] font-display uppercase font-light">
                    Responses generally within 24h
                </p>
            </div>
        </section>
    );
};

export default ContactAtelierEn;
