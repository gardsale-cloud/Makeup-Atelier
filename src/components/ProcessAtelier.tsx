import React from "react";

const steps = [
    {
        number: "01",
        title: "微信查詢檔期",
        description: "透過微信提供日期、地點及服務類型，以確認檔期安排。"
    },
    {
        number: "02",
        title: "確認服務內容與造型方向",
        description: "溝通妝髮需求、風格偏好及時間安排，確定服務內容與費用。"
    },
    {
        number: "03",
        title: "支付訂金確認預約",
        description: "收到訂金後正式保留檔期。"
    },
    {
        number: "04",
        title: "服務當天",
        description: "按約定時間到達提供專業妝髮服務。如需全天跟妝或團隊支援，可提前安排。"
    }
];

const ProcessAtelier = () => {
    return (
        <section className="py-32 bg-atelier-bg border-t border-atelier-border" id="process-atelier">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-24 text-center">
                    <span className="text-atelier-muted text-xs tracking-[0.4em] uppercase font-display mb-6 block">Service Process</span>
                    <h2 className="text-3xl lg:text-4xl font-chinese text-atelier-text leading-tight font-normal mb-8">
                        預約流程
                    </h2>
                    <p className="text-atelier-muted font-chinese text-sm max-w-xl mx-auto leading-relaxed font-light">
                        由初步查詢至服務當天，每個步驟清晰安排，讓您安心準備重要時刻。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="mb-8 relative">
                                <span className="text-4xl lg:text-5xl font-serif italic text-atelier-text opacity-[0.08]">
                                    {step.number}
                                </span>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-atelier-text opacity-20"></div>
                            </div>

                            <h3 className="text-lg font-chinese text-atelier-text mb-4 font-medium">{step.title}</h3>
                            <p className="text-sm text-atelier-muted leading-relaxed font-chinese font-light max-w-[200px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 h-px w-full bg-atelier-border max-w-4xl mx-auto opacity-50"></div>
            </div>
        </section>
    );
};

export default ProcessAtelier;
