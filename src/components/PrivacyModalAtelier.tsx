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
                className="max-w-[720px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with Close */}
                <div className="flex justify-between items-center mb-12 border-b border-atelier-border/10 pb-6">
                    <h3 className="font-chinese text-2xl text-atelier-text font-normal">隱私政策 / Privacy Policy</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-atelier-text opacity-30 hover:opacity-100 transition-opacity p-2"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="space-y-10 pr-4">
                    <section className="policy-section">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4 text-atelier-text">1. Information Collection / 資訊收集</h4>
                        <p className="mb-4">We collect information that you provide to us directly when you fill out our contact form, including your WeChat ID. This is used solely to contact you regarding your inquiry about our makeup services.</p>
                        <p>當您填寫我們的聯絡表格時，我們會收集您直接提供給我們的資訊，包括您的微信號。這僅用於聯絡您以解答有關我們妝髮服務的諮詢。</p>
                    </section>

                    <section className="policy-section">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4 text-atelier-text">2. Use of Data / 數據使用</h4>
                        <p className="mb-4">The collected data is used only for internal communication purposes. We do not sell or share your WeChat ID or any other personal information with third parties for marketing purposes.</p>
                        <p>收集的數據僅用於內部溝通。我們不會將您的微信號或任何其他個人資訊出售或分享給第三方用於營銷。 </p>
                    </section>

                    <section className="policy-section border-none">
                        <h4 className="text-xs uppercase tracking-[0.2em] font-display font-semibold mb-4 text-atelier-text">3. Contact Us / 聯絡我們</h4>
                        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us via WeChat (ID: Bbll6789).</p>
                        <p>如果您對本隱私政策有任何疑問，請通過微信（ID：Bbll6789）與我們聯絡。</p>
                    </section>
                </div>

                <footer className="mt-12 pt-8 border-t border-atelier-border/10">
                    <p className="text-[10px] uppercase tracking-[0.2em] opacity-30 text-atelier-muted">Last Updated: February 27, 2026</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyModalAtelier;
