"use client";

import { openContactModal } from "@/utils/contact";
import { handleScroll } from "@/utils/scroll";

const NavbarAtelier = () => {
    return (
        <nav className="w-full bg-atelier-bg border-b border-atelier-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between h-16 md:h-24 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-display font-medium text-lg tracking-[0.25em] text-atelier-text uppercase">PHUKET MUA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-x-14">
                        <a onClick={handleScroll} className="cursor-pointer text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#services">服務</a>
                        <a onClick={handleScroll} className="cursor-pointer text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#portfolio">作品</a>
                        <a onClick={handleScroll} className="cursor-pointer text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#testimonials">評價</a>
                        <a onClick={handleScroll} className="cursor-pointer text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide" href="#process">流程</a>
                        <button
                            onClick={openContactModal}
                            className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-[15px] tracking-wide cursor-pointer"
                        >
                            微信諮詢
                        </button>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-x-2 text-[11px] tracking-[0.2em] font-display uppercase">
                            <span className="text-atelier-text font-medium">中文</span>
                            <span className="text-atelier-border">/</span>
                            <a href="/en/" className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 cursor-pointer">EN</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAtelier;
