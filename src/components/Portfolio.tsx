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

const Portfolio = () => {
    return (
        <section className="py-28 bg-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="text-center mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-4 font-display">Selected Portfolio</h2>
                    <h3 className="font-chinese text-3xl md:text-4xl font-semibold text-neutral-dark mb-6">婚禮與妝髮作品</h3>
                    <p className="text-neutral-medium mb-0 font-chinese font-normal leading-relaxed max-w-xl mx-auto">自然細緻的妝髮呈現</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-sm bg-background-light aspect-[4/5] cursor-pointer">
                            <img
                                alt={item.title}
                                className="w-full h-full object-cover transition-opacity duration-700 hover:opacity-90"
                                src={item.image}
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm">
                                <p className="text-neutral-dark font-chinese text-lg font-bold mb-1">{item.title}</p>
                                <p className="text-neutral-medium text-sm font-display">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
