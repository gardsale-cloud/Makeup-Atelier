import React from "react";
import Link from "next/link";

const FooterAtelier = () => {
    return (
        <footer className="bg-atelier-bg py-32 border-t border-atelier-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
                    <div className="lg:col-span-4">
                        <div className="flex flex-col items-start">
                            <span className="font-display font-medium text-xl tracking-[0.3em] text-atelier-text uppercase mb-4">PHUKET MUA</span>
                            <span className="font-chinese text-sm text-atelier-muted tracking-widest font-light mb-10">普吉島專業化妝師</span>
                        </div>
                        <p className="text-atelier-muted text-xs leading-[2] font-chinese font-light max-w-xs uppercase tracking-wider">
                            Dedicated to the art of subtle elegance and natural beauty for the modern Asian woman.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div>
                            <span className="text-[10px] text-atelier-text uppercase tracking-[0.4em] font-display font-medium mb-8 block opacity-40">Navigation</span>
                            <ul className="space-y-4">
                                <li><Link className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors" href="#services-atelier">服務 (Services)</Link></li>
                                <li><Link className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors" href="#portfolio-atelier">作品 (Portfolio)</Link></li>
                                <li><Link className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors" href="#testimonials-atelier">評價 (Reviews)</Link></li>
                                <li><Link className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors" href="#process-atelier">流程 (Process)</Link></li>
                                <li><Link className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors" href="#faq-atelier">常見問題 (FAQ)</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] text-atelier-text uppercase tracking-[0.4em] font-display font-medium mb-8 block opacity-40">Contact</span>
                            <ul className="space-y-4">
                                <li className="text-atelier-muted text-xs tracking-widest uppercase">WeChat: PhuketMakeupArtist</li>
                                <li className="text-atelier-muted text-xs tracking-widest uppercase">WhatsApp: +66 81 234 5678</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[10px] text-atelier-text uppercase tracking-[0.4em] font-display font-medium mb-8 block opacity-40">Social</span>
                            <div className="flex gap-8 items-center">
                                <a href="#" className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors duration-300 ease-out">
                                    小紅書
                                </a>
                                <a href="#" className="text-atelier-muted hover:text-atelier-text text-xs tracking-widest uppercase transition-colors duration-300 ease-out">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-atelier-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] text-atelier-muted uppercase tracking-[0.3em] font-display">
                        © 2026 Phuket Atelier Makeup. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[9px] text-atelier-muted uppercase tracking-[0.3em] font-display hover:text-atelier-text transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[9px] text-atelier-muted uppercase tracking-[0.3em] font-display hover:text-atelier-text transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterAtelier;
