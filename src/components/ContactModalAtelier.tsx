"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { getAssetPath } from "@/utils/paths";

declare global {
    interface Window {
        ym?: (id: number, type: string, goal: string) => void;
        fbq?: any;
        gtag?: any;
    }
}

const ContactModalAtelier = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [wechatId, setWechatId] = useState("");
    const [honeypot, setHoneypot] = useState("");
    const [pageLoadTime, setPageLoadTime] = useState(0);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setPageLoadTime(Date.now());
        };
        window.addEventListener("open-contact-modal", handleOpen);
        return () => window.removeEventListener("open-contact-modal", handleOpen);
    }, []);

    // --- UTM Logic ---
    const getStoredUTM = () => {
        if (typeof window === 'undefined') return null;
        const utmRaw = localStorage.getItem('utm_data');
        try {
            return utmRaw ? JSON.parse(utmRaw) : null;
        } catch (e) {
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "loading") return;

        // 1. Honeypot check
        if (honeypot) {
            console.log("Honeypot caught a bot.");
            return;
        }

        // 2. Interaction time check (min 3 seconds from modal open)
        if (Date.now() - pageLoadTime < 3000) {
            console.log("Submissions too fast.");
            return;
        }

        setStatus("loading");
        setMessage("");

        const utmData = getStoredUTM();

        try {
            const response = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    wechat: wechatId,
                    timestamp: new Date().toISOString(),
                    source: window.location.href,
                    utm: utmData
                }),
            });

            if (response.ok) {
                setStatus("success");
                setMessage("已收到，我們會盡快聯繫您");

                // --- Analytics: Form Success Conversion ---
                if (typeof window !== 'undefined') {
                    if (window.gtag) {
                        window.gtag('event', 'conversion', { 'send_to': 'AW-11100467416/016lCNqU7t8aENjhjq0p' });
                    }
                    if (window.ym) {
                        window.ym(92936100, 'reachGoal', 'submit_form');
                    }
                }

                setWechatId("");
                setTimeout(() => {
                    setIsOpen(false);
                    setTimeout(() => {
                        setStatus("idle");
                        setMessage("");
                    }, 500);
                }, 2000);
            } else {
                throw new Error("Server error");
            }
        } catch (err) {
            setStatus("error");
            setMessage("發送失敗，請稍後再試。");
        }
    };

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!isOpen && status === "idle") return null;

    return (
        <div
            id="contact-modal-overlay"
            className={cn(isOpen && "active")}
            onClick={() => status !== "loading" && setIsOpen(false)}
        >
            <div
                id="contact-modal-container"
                className="max-w-[720px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-atelier-text opacity-30 hover:opacity-100 transition-opacity z-20 p-2"
                    disabled={status === "loading"}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row overflow-hidden bg-atelier-bg text-center md:text-left min-h-full">
                    {/* Left: Identity & QR */}
                    <div className="flex w-full md:w-[42%] bg-[#F2EFE9] flex-col items-center justify-center p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-[#EDEBE7]">
                        <div className="text-center mb-10">
                            <span className="font-display text-xs tracking-[0.15em] text-atelier-muted uppercase block mb-3 font-medium">微信聯絡</span>
                            <div className="font-serif italic text-2xl text-atelier-text">Bbll6789</div>
                        </div>

                        <div className="bg-white p-4 shadow-sm mb-6 border border-atelier-border/50">
                            <img src={getAssetPath("/images/WeChatQR.jpg")} alt="WeChat QR Code" className="w-28 h-28 object-contain opacity-90" />
                        </div>
                        <span className="text-xs font-display tracking-[0.15em] text-atelier-muted uppercase opacity-60">掃碼聯繫詳情</span>
                    </div>

                    {/* Right: Direct Inquiry */}
                    <div className="w-full md:w-[58%] p-8 pt-10 md:p-12 md:pt-20 lg:p-16 flex flex-col justify-center">
                        <header className="mb-6">
                            <h2 className="font-chinese text-2xl text-atelier-text mb-4 font-normal tracking-tight md:text-center">私人妝髮諮詢</h2>
                            <p className="font-chinese font-light text-base text-atelier-muted leading-relaxed md:text-center">
                                歡迎留下您的微信號，我會與您聯絡。
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Honeypot */}
                            <input
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: 'none' }}
                            />

                            <div className="space-y-6 flex justify-center">
                                <input
                                    type="text"
                                    value={wechatId}
                                    onChange={(e) => setWechatId(e.target.value)}
                                    required
                                    disabled={status === "loading" || status === "success"}
                                    className="modal-input font-chinese w-[85%] max-w-[400px] md:max-w-full text-center md:text-left"
                                    placeholder="您的微信號 (WeChat ID)"
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-[70%] max-w-[240px] md:w-full bg-atelier-cta hover:bg-atelier-cta-hover text-atelier-bg font-display text-[15px] font-medium py-5 px-10 md:px-8 tracking-wide transition-all uppercase disabled:opacity-50"
                                >
                                    {status === "loading" ? "提交中..." : status === "success" ? "已提交" : "發送"}
                                </button>
                            </div>

                            {message && (
                                <p className={cn(
                                    "text-xs font-display tracking-wide text-center",
                                    status === "error" ? "text-red-500 opacity-100" : "text-atelier-muted opacity-60"
                                )}>
                                    {message}
                                </p>
                            )}
                        </form>
                        <p className="text-xs text-atelier-muted mt-6 text-center font-display tracking-wide opacity-40 uppercase">
                            一般於當日內回覆
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModalAtelier;
