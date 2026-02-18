import React from "react";

const portfolioItems = [
    {
        title: "自然清透新娘妝",
        subtitle: "Natural Bridal Look",
        image: "/images/hero-main.jpg"
    },
    {
        title: "海島戶外婚紗照",
        subtitle: "Beach Pre-wedding",
        image: "/images/avatars/avatar-2.jpg"
    },
    {
        title: "晚宴精緻妝容",
        subtitle: "Evening Glamour",
        image: "/images/avatars/avatar-3.jpg"
    },
    {
        title: "韓式清新妝感",
        subtitle: "Korean Fresh Look",
        image: "/images/avatars/avatar-1.jpg"
    },
    {
        title: "泰式傳統婚禮",
        subtitle: "Thai Traditional Ceremony",
        image: "/images/hero-main.jpg"
    },
    {
        title: "時尚雜誌拍攝",
        subtitle: "Editorial Fashion",
        image: "/images/avatars/avatar-2.jpg"
    }
];

const PortfolioAtelier = () => {
    return (
        <section className="py-32 bg-atelier-bg" id="portfolio-atelier">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-12">
                <div className="mb-20">
                    <span className="text-atelier-accent text-xs tracking-[0.4em] uppercase font-display mb-6 block">Selected Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-chinese text-atelier-text leading-tight font-normal mb-6">
                        婚禮與妝髮作品
                    </h2>
                    <p className="text-atelier-muted font-chinese text-sm max-w-xl leading-relaxed font-light">
                        自然細緻的妝髮呈現
                    </p>
                    <div className="h-px w-20 bg-atelier-accent mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 lg:gap-x-20">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale-[15%] contrast-[95%]"
                                    src={item.image}
                                />
                            </div>
                            <div className="mt-6 flex flex-col items-start">
                                <h3 className="text-lg font-chinese text-atelier-text mb-2 font-medium">{item.title}</h3>
                                <p className="text-[10px] text-atelier-muted font-medium uppercase tracking-[0.2em] font-display">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioAtelier;
