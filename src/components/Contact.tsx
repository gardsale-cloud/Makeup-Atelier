import React from "react";

const Contact = () => {
    return (
        <section className="py-32 bg-background-light" id="contact">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="space-y-6 max-w-2xl">
                        <p className="text-xl font-medium font-chinese text-neutral-dark mb-4">
                            預約查詢
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-semibold font-chinese text-neutral-dark leading-tight mb-6">
                            預約您的妝髮服務
                        </h2>
                        <p className="text-neutral-medium font-display text-lg tracking-wide font-chinese font-normal max-w-xl mx-auto leading-relaxed">
                            婚禮旺季（11月–3月）檔期通常較早預約，建議提早查詢確認。
                        </p>
                    </div>
                    <div className="pt-6">
                        <a
                            className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-opacity duration-300 bg-neutral-dark rounded-full hover:opacity-90 shadow-soft"
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

export default Contact;
