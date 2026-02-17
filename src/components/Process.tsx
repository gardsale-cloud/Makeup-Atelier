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

const Process = () => {
    return (
        <section className="py-28 bg-background-light" id="process">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mx-auto mb-12">
                    <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 font-display">Service Process</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold font-chinese text-neutral-dark mb-6">
                        預約流程
                    </h2>
                    <p className="text-neutral-medium font-chinese text-lg mb-12 font-normal leading-relaxed max-w-xl mx-auto">
                        由初步查詢至服務當天，每個步驟清晰安排，讓您安心準備重要時刻。
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-border-light -translate-y-1/2 hidden md:block z-0"></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg text-center group border border-border-light shadow-soft">
                                <div className="w-16 h-16 mx-auto bg-background-light text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-white">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-medium text-neutral-dark font-chinese mb-3">{step.title}</h3>
                                <p className="text-sm text-neutral-medium leading-relaxed font-chinese font-normal">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
