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
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "empty">("idle");
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "loading") return;

        // 0. Empty field check
        if (!wechatId.trim()) {
            setStatus("empty");
            return;
        }

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

        // Clear empty state when fetching
        setStatus("loading");

        // 3. Extract UTM from current URL
        const params = new URLSearchParams(window.location.search);

        const payload = {
            wechat: wechatId,
            utm_source: params.get("utm_source"),
            utm_medium: params.get("utm_medium"),
            utm_campaign: params.get("utm_campaign"),
            utm_content: params.get("utm_content"),
            utm_term: params.get("utm_term")
        };

        try {
            const response = await fetch("https://form.phuketmua.site", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus("success");

                // --- Analytics: Form Success Conversion ---
                if (typeof window !== "undefined") {
                    if (window.gtag) {
                        window.gtag("event", "conversion", { send_to: "AW-11100467416/016lCNqU7t8aENjhjq0p" });
                    }
                    if (window.ym) {
                        window.ym(92936100, "reachGoal", "submit_form");
                    }
                }

                setWechatId("");
            } else {
                throw new Error(`Server returned ${response.status}`);
            }
        } catch (err) {
            console.error("Submission error:", err);
            setStatus("error");

            // --- Analytics: Form Error Event ---
            if (typeof window !== "undefined") {
                if (window.ym) {
                    window.ym(92936100, "reachGoal", "submit_form_error");
                }
            }
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

    const isSubmitting = status === "loading";
    const isError = status === "error";
    const isSuccess = status === "success";
    const isEmpty = status === "empty";

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
                    disabled={isSubmitting}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row md:overflow-hidden bg-atelier-bg text-center md:text-left min-h-full">
                    {/* Left: Identity & QR */}
                    <div className="flex w-full md:w-[42%] bg-[#F2EFE9] flex-col items-center justify-center p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#EDEBE7] order-2 md:order-1 flex-1 md:flex-none">
                        <div className="text-center mb-12">
                            <span className="font-display text-xs tracking-[0.15em] text-atelier-muted uppercase block mb-3 font-medium">微信聯絡</span>
                            <div className="text-2xl text-atelier-text tracking-wider">Bbll6789</div>
                        </div>

                        <div className="bg-white p-4 shadow-sm mb-6 border border-atelier-border/50">
                            <img src={getAssetPath("/images/WeChatQR.jpg")} alt="WeChat QR Code" className="w-28 h-28 object-contain opacity-90" />
                        </div>
                        <span className="text-xs font-display tracking-[0.15em] text-atelier-muted uppercase opacity-60">掃碼聯繫詳情</span>
                    </div>

                    {/* Right: Direct Inquiry */}
                    <div className="w-full md:w-[58%] p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2">
                        <header className="mb-12">
                            <h2 className="font-chinese text-2xl text-atelier-text mb-4 font-normal tracking-tight md:text-left">私人妝髮諮詢</h2>
                            <p className="font-chinese font-light text-base text-atelier-muted leading-relaxed md:text-left">
                                歡迎留下您的微信號，我會與您聯絡。
                            </p>
                        </header>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Honeypot */}
                            <input
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: "none" }}
                            />

                            <div className="space-y-6 flex justify-center md:justify-start">
                                <input
                                    type="text"
                                    value={wechatId}
                                    onChange={(e) => {
                                        setWechatId(e.target.value);
                                        if (status === "empty") setStatus("idle");
                                    }}
                                    disabled={isSubmitting || isSuccess}
                                    className="modal-input font-chinese w-[75%] max-w-[280px] md:max-w-full text-center md:text-left"
                                    placeholder="您的微信號 (WeChat ID)"
                                />
                            </div>

                            {/* Single button element — never remounted, zero layout shift */}
                            <div className="flex justify-center md:justify-start">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isError || isSuccess}
                                    className={cn(
                                        "w-[75%] max-w-[280px] md:w-full py-5 px-10 md:px-8 font-chinese text-[15px] font-medium transition-colors duration-200 border",
                                        isError
                                            ? "bg-red-50 border-red-200 text-red-600 cursor-default"
                                            : isSuccess
                                                ? "bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default"
                                                : isEmpty
                                                    ? "bg-amber-50 border-amber-200 text-amber-700 cursor-pointer"
                                                    : "bg-atelier-cta border-transparent text-atelier-bg hover:opacity-90 tracking-wide uppercase font-display disabled:opacity-50"
                                    )}
                                >
                                    {isError
                                        ? "送出未成功，請掃碼聯繫。"
                                        : isSuccess
                                            ? "已收到諮詢 ✓"
                                            : isEmpty
                                                ? "請填寫微信號"
                                                : isSubmitting
                                                    ? "發送中..."
                                                    : "發送"}
                                </button>
                            </div>
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
