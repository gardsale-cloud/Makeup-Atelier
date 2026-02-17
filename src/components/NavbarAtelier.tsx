"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const NavbarAtelier = () => {
    return (
        <div className="w-full bg-atelier-bg border-b border-atelier-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="material-icons-round text-atelier-text text-2xl opacity-80">brush</span>
                        <span className="font-display font-medium text-lg tracking-widest text-atelier-text uppercase">PHUKET MUA</span>
                    </div>
                    <div className="hidden md:flex space-x-10">
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors font-chinese text-sm tracking-wide" href="#services">服務</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors font-chinese text-sm tracking-wide" href="#portfolio">作品</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors font-chinese text-sm tracking-wide" href="#testimonials">評價</Link>
                        <Link className="text-atelier-muted hover:text-atelier-text transition-colors font-chinese text-sm tracking-wide" href="#process">流程</Link>
                    </div>
                    <div>
                        <Link className="bg-atelier-cta hover:bg-atelier-cta-hover text-atelier-bg px-8 py-2.5 rounded-full font-medium transition-colors text-sm tracking-tight flex items-center gap-2" href="#contact">
                            聯繫我
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarAtelier;
