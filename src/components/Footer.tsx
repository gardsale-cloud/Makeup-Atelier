import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-background-light py-28 border-t border-border-light">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="mb-8 flex flex-col items-center">
                    <span className="material-icons-round text-primary text-4xl mb-2">brush</span>
                    <span className="font-display font-bold text-2xl tracking-tight text-neutral-dark">PHUKET MUA</span>
                    <span className="font-chinese text-sm text-neutral-medium mt-1 font-normal">普吉島專業化妝師</span>
                </div>
                <nav className="mb-10">
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <li><Link className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors" href="#services">服務 (Services)</Link></li>
                        <li><Link className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors" href="#portfolio">作品 (Portfolio)</Link></li>
                        <li><Link className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors" href="#testimonials">評價 (Reviews)</Link></li>
                        <li><Link className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors" href="#process">流程 (Process)</Link></li>
                        <li><Link className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors" href="#faq">常見問題 (FAQ)</Link></li>
                    </ul>
                </nav>
                <div className="flex gap-4 mb-8">
                    <a className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-primary hover:bg-neutral-50 transition-colors duration-300 shadow-soft" href="#">
                        <span className="material-symbols-outlined text-lg">public</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-primary hover:bg-neutral-50 transition-colors duration-300 shadow-soft" href="#">
                        <span className="material-icons-round text-lg">camera_alt</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-white border border-border-light flex items-center justify-center text-primary hover:bg-neutral-50 transition-colors duration-300 shadow-soft" href="#">
                        <span className="material-symbols-outlined text-lg">chat</span>
                    </a>
                </div>
                <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-neutral-medium font-display">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>WeChat: PhuketMakeupArtist</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>WhatsApp: +66 81 234 5678</span>
                    </div>
                </div>
                <div className="border-t border-border-light w-full max-w-xs pt-8">
                    <p className="text-xs text-neutral-medium">
                        © 2023 Phuket Professional Makeup Artist.<br />All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
