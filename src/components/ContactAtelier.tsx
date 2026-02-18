import React from "react";

const ContactAtelier = () => {
    return (
        <section className="py-40 bg-atelier-bg border-t border-atelier-border" id="contact-atelier">
            <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                <div className="flex flex-col items-center">
                    <span className="text-atelier-accent text-xs tracking-[0.5em] uppercase font-display mb-10 block">預約查詢</span>

                    <h2 className="text-4xl lg:text-6xl font-chinese text-atelier-text leading-tight font-normal mb-8 max-w-3xl">
                        預約您的 <span className="italic font-serif text-atelier-accent">妝髮服務</span>
                    </h2>

                    <p className="text-atelier-muted font-chinese text-base lg:text-lg mb-16 max-w-xl leading-relaxed font-light">
                        婚禮旺季（11月–3月）檔期通常較早預約，建議提早查詢確認。
                    </p>

                    <div className="flex justify-center">
                        <a
                            className="bg-atelier-cta hover:bg-atelier-cta-hover text-atelier-bg px-16 py-5 rounded-none font-medium text-sm tracking-[0.2em] transition-all text-center uppercase shadow-none border border-atelier-cta"
                            href="https://wa.me/yourwhatsapplink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            微信查詢檔期
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactAtelier;
