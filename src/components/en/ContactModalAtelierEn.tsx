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

const ContactModalAtelierEn = () => {
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

        if (!wechatId.trim()) {
            setStatus("empty");
            return;
        }

        if (honeypot) return;

        if (Date.now() - pageLoadTime < 3000) return;

        setStatus("loading");

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
            if (typeof window !== "undefined") {
                if (window.ym) {
                    window.ym(92936100, "reachGoal", "submit_form_error");
                }
            }
        }
    };

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
                className="max-w-[480px] w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-atelier-bg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-atelier-text opacity-30 hover:opacity-100 transition-opacity z-20 p-2 cursor-pointer"
                    disabled={isSubmitting}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center text-center">
                    <header className="mb-8">
                        <span className="text-xs uppercase tracking-[0.3em] text-atelier-accent mb-4 font-display block">Inquiry</span>
                        <h2 className="font-display text-2xl text-atelier-text mb-3 font-normal tracking-tight uppercase">Private Inquiry</h2>
                        <p className="font-display font-light text-sm text-atelier-muted leading-relaxed max-w-sm mx-auto">
                            Leave your WeChat ID, and I will contact you shortly.
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            style={{ display: "none" }}
                        />

                        <div className="flex justify-center">
                            <input
                                type="text"
                                value={wechatId}
                                onChange={(e) => {
                                    setWechatId(e.target.value);
                                    if (status === "empty") setStatus("idle");
                                }}
                                disabled={isSubmitting || isSuccess}
                                className="modal-input font-display w-full text-center"
                                placeholder="Your WeChat ID"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting || isError || isSuccess}
                                className={cn(
                                    "w-full py-4 px-8 font-display text-[15px] font-medium transition-colors duration-200 border uppercase tracking-widest cursor-pointer",
                                    isError
                                        ? "bg-red-50 border-red-200 text-red-600 cursor-default"
                                        : isSuccess
                                            ? "bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default"
                                            : isEmpty
                                                ? "bg-amber-50 border-amber-200 text-amber-700 cursor-pointer"
                                                : "bg-atelier-cta border-transparent text-atelier-bg hover:opacity-90 disabled:opacity-50"
                                )}
                            >
                                {isError
                                    ? "Failed. Please try again later."
                                    : isSuccess
                                        ? "Inquiry Received ✓"
                                        : isEmpty
                                            ? "Enter WeChat ID"
                                            : isSubmitting
                                                ? "Sending..."
                                                : "Send"}
                            </button>
                        </div>
                    </form>

                    <p className="text-xs text-atelier-muted mt-6 text-center font-display tracking-wide opacity-40">
                        Personal response within 24 hours
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactModalAtelierEn;
