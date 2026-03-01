"use client";

import React, { useState, useEffect } from "react";

const PrivacyModalAtelierEn = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        };
        window.addEventListener("open-privacy-modal", handleOpen);
        return () => window.removeEventListener("open-privacy-modal", handleOpen);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = "unset";
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-atelier-text/40 backdrop-blur-sm" onClick={handleClose}></div>
            <div className="relative bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 p-8 md:p-12">
                <button onClick={handleClose} className="absolute right-6 top-6 text-atelier-text/40 hover:text-atelier-text transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col">
                    <div className="w-12 h-px bg-atelier-accent mb-8 opacity-60"></div>
                    <h2 className="text-3xl font-display text-atelier-text mb-8 uppercase tracking-wider">Privacy Policy</h2>

                    <div className="space-y-8 font-display font-light text-[15px] leading-relaxed text-atelier-muted">
                        <section>
                            <h3 className="text-atelier-text font-medium uppercase tracking-widest text-xs mb-3">1. Introduction</h3>
                            <p>Phuket Atelier Makeup operates the website phuketmua.site. This policy informs you of the practices regarding the collection and use of personal data when you use this service.</p>
                        </section>

                        <section>
                            <h3 className="text-atelier-text font-medium uppercase tracking-widest text-xs mb-3">2. Information Collection</h3>
                            <p>While using this service, I may ask you to provide your WeChat ID to facilitate communication. This is used solely for responding to stylistic inquiries and managing bookings.</p>
                        </section>

                        <section>
                            <h3 className="text-atelier-text font-medium uppercase tracking-widest text-xs mb-3">3. Use of Data</h3>
                            <p>Collected information is used to maintain the service, provide customer support, and monitor usage to improve the experience.</p>
                        </section>

                        <section>
                            <h3 className="text-atelier-text font-medium uppercase tracking-widest text-xs mb-3">4. Cookies & Analytics</h3>
                            <p>Tracking technologies (Google Ads, Yandex Metrika, Meta Pixel) are used to analyze traffic and site activity. This helps optimize the minimal user experience.</p>
                        </section>

                        <section>
                            <h3 className="text-atelier-text font-medium uppercase tracking-widest text-xs mb-3">5. Contact</h3>
                            <p>For questions regarding this policy, please contact Phuket Atelier Makeup via WeChat (ID: <span className="tracking-wider font-normal">Bbll6789</span>).</p>
                        </section>

                        <p className="pt-8 border-t border-atelier-border/40 text-[10px] uppercase tracking-widest opacity-50">
                            Last Updated: February 27, 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModalAtelierEn;
