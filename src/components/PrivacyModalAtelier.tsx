"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const PrivacyModalAtelier = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-privacy-modal", handleOpen);
        return () => window.removeEventListener("open-privacy-modal", handleOpen);
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!isOpen) return null;

    return (
        <div
            id="privacy-modal-overlay"
            className={cn(isOpen && "active")}
            onClick={() => setIsOpen(false)}
        >
            <div
                id="privacy-modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-8 right-8 text-atelier-text opacity-30 hover:opacity-100 transition-opacity p-2"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="font-chinese text-[14px] leading-relaxed">
                    <header className="mb-12">
                        <span className="text-xs tracking-[0.3em] text-atelier-accent uppercase font-display block mb-3">Legal & Transparency</span>
                        <h3 className="text-3xl font-chinese font-normal tracking-tight">Privacy Policy / 隱私政策</h3>
                    </header>

                    <div className="space-y-12">
                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">1. Introduction / 基本聲明</h4>
                            <p className="mb-4">Phuket Atelier Makeup (referred to as "we", "us", or "our") operates the website phuketmua.site. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                            <p>Phuket Atelier Makeup（以下簡稱「我們」）運營網站 phuketmua.site。本隱私政策旨在告知您在您使用我們的服務時，我們關於收集、使用和披露個人數據的政策，以及您與該數據相關的選擇。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">2. Information Collection and Use / 信息收集與使用</h4>
                            <p className="mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                            <ul className="list-disc pl-5 space-y-3 mb-4">
                                <li>WeChat ID / 微信號</li>
                                <li>Cookies and Usage Data / Cookies 和使用數據</li>
                            </ul>
                            <p>在使用我們的服務時，我們可能會要求您向我們提供某些可用於聯絡或識別您的個人身份信息（「個人數據」）。個人身份信息可能包括但不限於：您的微信號、Cookies 和使用數據。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">3. Use of Data / 數據用途</h4>
                            <p className="mb-4">We use the collected data for various purposes:</p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>To provide and maintain our Service / 提供並維護我們的服務</li>
                                <li>To notify you about changes to our Service / 通知您關於我們服務的變更</li>
                                <li>To provide customer support and respond to inquiries / 提供客戶支持並回覆諮詢</li>
                                <li>To monitor the usage of our Service / 監控服務的使用情況</li>
                            </ul>
                            <p>我們將收集到的數據用於各種目的：提供及維護服務、通知服務變更、提供客戶支持、以及監控服務的使用情況。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">4. Tracking & Cookies Data / 追蹤與 Cookie 數據</h4>
                            <p className="mb-4">We use cookies and similar tracking technologies (like Google Ads, Yandex Metrika, Meta Pixel) to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
                            <p>我們使用 Cookie 和類似的追蹤技術（如 Google Ads、Yandex Metrika、Meta Pixel）來追蹤我們服務上的活動並保留某些信息。Cookie 是包含少量數據的文件，可能包括匿名的唯一標識符。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">5. Disclosure of Data / 數據披露</h4>
                            <p className="mb-4">We do not sell or lease your personal data. We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation or protect and defend the rights or property of Phuket Atelier Makeup.</p>
                            <p>我們不會出售或租賃您的個人數據。我們可能會基於誠信原則，認為披露您的個人數據是履行法律義務或保護 Phuket Atelier Makeup 權利或財產所必需的，從而披露您的數據。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">6. Security of Data / 數據安全</h4>
                            <p className="mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                            <p>您的數據安全對我們很重要，但請記住，互聯網傳輸或電子存儲方法都不是 100% 安全的。雖然我們努力使用商業上可接受的方式來保護您的個人數據，但我們無法保證其絕對安全。</p>
                        </section>

                        <section className="policy-section">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4">7. Contact Us / 聯絡我們</h4>
                            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us via WeChat (ID: <span className="tracking-wider font-normal">Bbll6789</span>).</p>
                            <p>如果您對本隱私政策有任何疑問，請通過微信（ID：<span className="tracking-wider font-normal">Bbll6789</span>）與我們聯絡。</p>
                        </section>

                        <footer className="pt-10 border-t border-atelier-border/10">
                            <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">Last Updated: February 27, 2026 / 最後更新：2026年2月27日</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModalAtelier;
