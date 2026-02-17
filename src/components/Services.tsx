import React from "react";

const services = [
    {
        title: "婚禮妝髮造型",
        subtitle: "Wedding Makeup & Hair",
        description: "為海外婚禮新娘提供定制妝髮服務，根據婚紗、場地與婚禮流程設計整體造型，自然精緻、上鏡持久。包含整體妝髮設計，可安排試妝及預約全天跟妝服務。",
        price: "HK$ 4,800 起",
        link: "#contact"
    },
    {
        title: "旅拍 / 婚紗攝影妝髮",
        subtitle: "Pre-Wedding & Photoshoot Styling",
        description: "適合普吉島海島旅拍及婚紗攝影，妝容清透高級，在自然光下依然立體清晰。包含妝髮設計，可更換造型及提供補妝支援。",
        price: "HK$ 3,800 起",
        link: "#contact"
    },
    {
        title: "活動及晚宴妝髮",
        subtitle: "Event & Evening Styling",
        description: "適合晚宴、派對及品牌活動等重要場合，妝容優雅得體，兼顧現場與拍攝效果。可按场合定制妝容，並提供上門服務。",
        price: "HK$ 2,800 起",
        link: "#contact"
    }
];

const Services = () => {
    return (
        <section className="py-28 bg-[#F8F7F6]" id="services">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-center mx-auto mb-12">
                    <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-4 font-display">My Services</h2>
                    <h3 className="text-3xl md:text-4xl font-medium font-chinese text-neutral-dark mb-6">私人定制妝髮服務</h3>
                    <p className="text-neutral-medium mb-12 font-normal font-chinese leading-relaxed max-w-xl mx-auto">為不同場合提供精緻、自然且持久的妝髮方案</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start text-left group">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-border-light group-hover:border-primary/30 transition-colors duration-300">
                                <span className="material-icons-round text-primary text-lg">
                                    {index === 0 ? "face" : index === 1 ? "camera_alt" : "auto_awesome"}
                                </span>
                            </div>
                            <h4 className="text-xl font-medium text-neutral-dark mb-2 font-chinese">{service.title}</h4>
                            <p className="text-xs text-neutral-medium font-medium mb-6 uppercase tracking-widest font-display">{service.subtitle}</p>
                            <p className="text-neutral-medium text-sm leading-relaxed mb-8 font-chinese font-normal max-w-xl">
                                {service.description}
                            </p>
                            <div className="mt-auto w-full">
                                <p className="text-xs text-neutral-medium mb-4 font-chinese">{service.price}</p>
                                <a className="inline-flex items-center text-neutral-dark font-medium transition-opacity duration-300 hover:opacity-70 group/link" href={service.link}>
                                    查詢檔期
                                    <span className="material-icons-round text-base ml-1 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
