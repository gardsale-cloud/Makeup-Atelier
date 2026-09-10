"use client";

import React from "react";
import { openContactModal, openPrivacyModal } from "@/utils/contact";
import { handleScroll } from "@/utils/scroll";

const FooterAtelierEn = () => {
    return (
        <footer className="pt-20 pb-16 md:pt-24 md:pb-20 px-6 md:px-12 lg:px-24 bg-atelier-bg border-t border-atelier-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12 md:gap-8 text-center md:text-left">

                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-atelier-muted/60 font-display">Navigation</p>
                        <nav className="flex flex-col space-y-4">
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-display font-light uppercase" href="#services">Services</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-display font-light uppercase" href="#portfolio">Portfolio</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-display font-light uppercase" href="#testimonials">Reviews</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-display font-light uppercase" href="#process">Process</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-atelier-muted/60 font-display">Contact</p>
                        <div className="space-y-3 font-display font-light tracking-widest">
                            <p className="text-sm text-atelier-muted flex items-center gap-1.5 justify-center md:justify-start">
                                <span>Inquiry:</span>
                                <button
                                    onClick={openContactModal}
                                    className="text-atelier-text hover:text-atelier-accent transition-colors underline underline-offset-4 cursor-pointer font-normal"
                                >
                                    Private Consultation
                                </button>
                            </p>
                            <p className="text-sm text-atelier-muted">
                                Region: <span className="text-atelier-text font-normal">Phuket, Thailand</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-20 text-center space-y-4">
                    <p className="text-[10px] text-atelier-muted font-light opacity-60 tracking-[0.25em] font-display uppercase">
                        © 2026 PHUKET ATELIER MAKEUP. <br />ALL RIGHTS RESERVED.
                    </p>
                    <button
                        onClick={openPrivacyModal}
                        className="text-[10px] text-atelier-muted hover:text-atelier-text transition-colors font-display tracking-[0.2em] uppercase opacity-40 hover:opacity-100 cursor-pointer"
                    >
                        Privacy Policy
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterAtelierEn;
