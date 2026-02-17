"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-background-light border-b border-atelier-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="material-icons-round text-primary text-3xl">brush</span>
                        <span className="font-display font-bold text-xl tracking-tight text-neutral-dark">PHUKET MUA</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link className="text-neutral-medium hover:text-neutral-dark transition-colors font-chinese" href="#services">服務</Link>
                        <Link className="text-neutral-medium hover:text-neutral-dark transition-colors font-chinese" href="#portfolio">作品</Link>
                        <Link className="text-neutral-medium hover:text-neutral-dark transition-colors font-chinese" href="#testimonials">評價</Link>
                        <Link className="text-neutral-medium hover:text-neutral-dark transition-colors font-chinese" href="#process">流程</Link>
                    </div>
                    <div>
                        <Link className="bg-neutral-dark hover:bg-neutral-medium text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-none flex items-center gap-2" href="#contact">
                            <MessageCircle className="w-4 h-4" />
                            聯繫我
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
