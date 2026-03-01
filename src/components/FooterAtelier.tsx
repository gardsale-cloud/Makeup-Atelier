"use client";

import React from "react";
import { openPrivacyModal } from "@/utils/contact";
import { handleScroll } from "@/utils/scroll";

const FooterAtelier = () => {
    return (
        <footer className="pt-20 pb-16 md:pt-24 md:pb-20 px-6 md:px-12 lg:px-24 bg-atelier-bg border-t border-atelier-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12 md:gap-8 text-center md:text-left">

                    {/* Navigation */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-atelier-muted/60 font-display">Navigation</p>
                        <nav className="flex flex-col space-y-4">
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-chinese font-light" href="#services">服務</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-chinese font-light" href="#portfolio">作品</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-chinese font-light" href="#testimonials">評價</a>
                            <a onClick={handleScroll} className="cursor-pointer text-sm tracking-widest text-atelier-muted hover:text-atelier-text transition-colors font-chinese font-light" href="#process">流程</a>
                        </nav>
                    </div>

                    {/* Separator for Mobile */}
                    <div className="w-8 h-px bg-atelier-accent/40 md:hidden"></div>

                    {/* Social */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-atelier-muted/60 font-display">Social</p>
                        <div className="flex flex-col space-y-4">
                            <a
                                className="text-sm tracking-wider text-atelier-muted hover:text-atelier-text transition-colors flex items-center justify-center md:justify-start gap-2 group font-chinese font-light"
                                href="https://www.xiaohongshu.com/user/profile/63d5ee2b0000000026010e28?utm_source=website&utm_medium=referral&utm_campaign=makeupphuket"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                小紅書
                            </a>
                        </div>
                    </div>

                    {/* Separator for Mobile */}
                    <div className="w-8 h-px bg-atelier-accent/40 md:hidden"></div>

                    {/* Contact */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-atelier-muted/60 font-display">Contact</p>
                        <div className="space-y-3 font-chinese font-light">
                            <p className="text-sm text-atelier-muted tracking-wide">
                                微信：<span className="text-atelier-text font-normal tracking-wider">Bbll6789</span>
                            </p>
                            <p className="text-sm text-atelier-muted tracking-wide">
                                地區：<span className="text-atelier-text font-normal">Phuket, Thailand</span>
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
                        Privacy Policy / 隱私政策
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterAtelier;
