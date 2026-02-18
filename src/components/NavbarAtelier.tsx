"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const NavbarAtelier = () => {
    return (
        <div className="w-full bg-atelier-bg border-b border-atelier-border/40 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="font-display font-medium text-lg tracking-[0.25em] text-atelier-text uppercase">PHUKET MUA</span>
                    </div>
                    <div className="hidden md:flex items-center gap-x-14">
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-sm tracking-widest" href="#services-atelier">服務項目</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-sm tracking-widest" href="#portfolio-atelier">精選作品</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-sm tracking-widest" href="#testimonials-atelier">客戶評價</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors duration-300 ease-out font-chinese text-sm tracking-widest" href="#process-atelier">預約流程</Link>
                    </div>
                    <div>
                        <Link className="text-atelier-text font-chinese text-sm tracking-widest font-medium border-b border-transparent hover:text-atelier-muted transition-colors duration-300 ease-out" href="#contact-atelier">
                            聯繫我
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarAtelier;
