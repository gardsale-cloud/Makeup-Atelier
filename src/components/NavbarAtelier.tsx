"use client";

import React from "react";
import Link from "next/link";
import { openContactModal } from "@/utils/contact";

const NavbarAtelier = () => {
    return (
        <nav className="w-full bg-atelier-bg border-b border-atelier-border/40 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between h-16 md:h-24 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-display font-medium text-lg tracking-[0.25em] text-atelier-text uppercase">PHUKET MUA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-x-14">
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#services">服務</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#portfolio">作品</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#testimonials">評價</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#process">流程</Link>
                    </div>
                    <div>
                        <button
                            onClick={openContactModal}
                            className="text-atelier-text font-chinese text-[15px] tracking-wide font-medium border-b border-transparent transition-colors duration-300 ease-out hover:text-atelier-muted pb-0.5"
                        >
                            微信諮詢
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAtelier;
