import React from "react";

const testimonials = [
    {
        name: "Chloe Zhang",
        location: "Sri Panwa",
        quote: "妝面太高級了",
        text: "完全是我想要的泰式輕混血感，眼妝超級精緻。在普吉島這麼熱的天氣下，底妝居然一天都沒脫...",
        xhsHandle: "Chloe.Z",
        xhsText: "姐妹們！普吉島跟妝直接閉眼沖這家！💯 化妝老師太專業了，完全get到了我想要的泰式輕混血妝容，眼妝超級精緻，而且底妝 в 普吉島這麼熱的天氣下居然一天都沒脫，太厲害了！ #普吉島婚禮 #新娘跟妝",
        avatar: "/images/avatars/avatar-1.jpg",
        hearts: 128,
        comments: 32,
        images: [
            "/images/hero-main.jpg",
            "/images/avatars/avatar-3.jpg"
        ]
    },
    {
        name: "Emily Chen",
        location: "The Shore",
        quote: "像朋友一樣貼心",
        text: "溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態...",
        xhsHandle: "Emily_C",
        xhsText: "真的是神仙化妝師！🧚‍♀️ 溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態，像朋友一樣貼心. 強烈推薦給來普吉島備婚的姐妹！ #普吉島旅拍 #海外婚禮",
        avatar: "/images/avatars/avatar-2.jpg",
        hearts: 89,
        comments: 14,
        images: [
            "/images/avatars/avatar-2.jpg"
        ],
        className: "md:translate-y-16"
    },
    {
        name: "Sarah Liu",
        location: "Amanpuri",
        quote: "自然又高級",
        text: "非常喜歡老師化的妝，自然又高級，完全不是那種假面的感覺。朋友們都夸我那天美呆了...",
        xhsHandle: "Sarah.Liu",
        xhsText: "終於圓滿禮成！非常喜歡老師化的妝，自然又高級，完全不是那種假面的感覺。朋友們都夸我那天美呆了。而且老師用的化妝品都是大牌，敏感肌用在臉上很放心 ✨ #Amanpuri #普吉島婚禮",
        avatar: "/images/avatars/avatar-3.jpg",
        hearts: 204,
        comments: 45,
        images: [
            "/images/avatars/avatar-3.jpg",
            "/images/hero-main.jpg"
        ]
    }
];

const TestimonialsAtelier = () => {
    return (
        <section className="py-32 bg-atelier-bg border-t border-atelier-border" id="testimonials-atelier">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
                        <span className="text-atelier-muted text-xs tracking-[0.4em] uppercase font-display mb-6 block">Edotorial Reviews</span>
                        <h2 className="text-3xl lg:text-4xl font-chinese text-atelier-text leading-tight font-normal mb-8">
                            她們的信任，<br />是最真實的肯定
                        </h2>
                        <p className="text-atelier-muted font-chinese text-sm leading-relaxed max-w-sm">
                            來自婚禮、旅拍及活動客戶的真實分享。自然、精緻且持久的妝髮，陪伴每個重要時刻。
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {testimonials.map((item, index) => (
                                <div key={index} className={`group relative flex flex-col ${item.className || ""}`}>
                                    <div className="relative bg-atelier-bg p-8 h-full border border-atelier-border transition-all duration-500 overflow-hidden">
                                        {/* Background Decoration */}
                                        <div className="absolute top-0 left-2 font-serif text-[10rem] leading-none text-atelier-text opacity-[0.03] pointer-events-none italic">“</div>

                                        {/* Main Content (Quote) */}
                                        <div className="relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <h3 className="font-chinese font-medium text-lg text-atelier-text mb-4 italic">“{item.quote}”</h3>
                                                <p className="text-atelier-muted font-chinese leading-relaxed text-sm font-light">
                                                    {item.text}
                                                </p>
                                            </div>
                                            <div className="mt-8 flex items-center gap-4 border-t border-atelier-border pt-6">
                                                <img alt={item.name} className="w-8 h-8 rounded-full object-cover grayscale opacity-60" src={item.avatar} />
                                                <div>
                                                    <p className="text-[10px] font-medium text-atelier-text font-display uppercase tracking-[0.2em]">{item.name}</p>
                                                    <p className="text-[9px] text-atelier-muted uppercase tracking-wider mt-0.5">{item.location}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* XHS Mockup Layer (Show on hover) */}
                                        <div className="xhs-mockup absolute inset-0 z-20 bg-atelier-bg p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-atelier-border/30 flex items-center justify-center overflow-hidden">
                                                    <img alt={item.xhsHandle} className="w-full h-full object-cover" src={item.avatar} />
                                                </div>
                                                <span className="text-xs font-medium text-atelier-text tracking-tight">{item.xhsHandle}</span>
                                                <span className="ml-auto text-[9px] text-atelier-muted font-display uppercase tracking-widest">1d ago</span>
                                            </div>

                                            <div className="flex-grow overflow-hidden">
                                                <p className="text-xs font-chinese text-atelier-muted leading-relaxed mb-4 font-light line-clamp-4">
                                                    {item.xhsText}
                                                </p>
                                                <div className="flex gap-2 mb-2">
                                                    {item.images.map((img, i) => (
                                                        <div key={i} className="h-16 w-16 bg-atelier-border/20 overflow-hidden ring-1 ring-inset ring-atelier-text/5">
                                                            <img alt="Post" className="w-full h-full object-cover grayscale-[20%]" src={img} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-atelier-border/50 mt-4">
                                                <div className="flex gap-4">
                                                    <span className="flex items-center gap-1.5 text-[10px] text-atelier-muted">
                                                        <span className="material-icons-round text-base opacity-40">favorite_border</span> {item.hearts}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-[10px] text-atelier-muted">
                                                        <span className="material-icons-round text-base opacity-40">chat_bubble_outline</span> {item.comments}
                                                    </span>
                                                </div>
                                                <span className="material-icons-round text-base text-atelier-muted opacity-40">bookmark_border</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* View More Card */}
                            <div className="group relative flex flex-col md:translate-y-16 hidden md:flex">
                                <div className="bg-atelier-bg p-8 h-full border border-atelier-border flex flex-col justify-center text-left">
                                    <h3 className="font-chinese font-medium text-lg text-atelier-text mb-3">查看更多妝髮作品紀錄</h3>
                                    <p className="text-atelier-muted text-xs font-chinese leading-relaxed mb-8 font-light">更多不同場景與風格的妝髮呈現，<br />收錄於小紅書。</p>
                                    <a className="text-xs font-medium text-atelier-text hover:opacity-50 transition-opacity tracking-widest uppercase flex items-center gap-2 group" href="#">
                                        前往小紅書瀏覽
                                        <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">east</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAtelier;
