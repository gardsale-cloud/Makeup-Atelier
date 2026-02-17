import React from "react";

const testimonials = [
    {
        name: "Chloe Zhang",
        location: "Sri Panwa",
        quote: "“妝面太高級了！”",
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
        quote: "“像朋友一樣貼心”",
        text: "溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態...",
        xhsHandle: "Emily_C",
        xhsText: "真的是神仙化妝師！🧚‍♀️ 溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態，像朋友一樣貼心。強烈推薦給來普吉島備婚的姐妹！ #普吉島旅拍 #海外婚禮",
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
        quote: "“自然又高級”",
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

const Testimonials = () => {
    return (
        <section className="py-28 bg-background-light" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
                        <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 font-display">Edotorial Reviews</span>
                        <h2 className="text-3xl lg:text-4xl font-semibold font-chinese text-neutral-dark mb-6 leading-tight">
                            她們的信任，<br />是最真實的肯定
                        </h2>
                        <p className="text-neutral-medium font-chinese text-lg mb-12 font-normal leading-relaxed max-w-xl">
                            來自婚禮、旅拍及活動客戶的真實分享。自然、精緻且持久的妝髮，陪伴每個重要時刻。
                        </p>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((item, index) => (
                                <div key={index} className={`group relative flex flex-col ${item.className || ""}`}>
                                    <div className="relative bg-white p-6 md:p-8 h-full border border-border-light/50 transition-all duration-500 overflow-hidden">
                                        <div className="absolute top-0 left-2 font-serif text-[8rem] leading-none text-primary opacity-[0.15] pointer-events-none">“</div>
                                        <div className="quote-content relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <h3 className="font-chinese font-medium text-lg text-neutral-dark mb-4">“{item.quote.replace(/[“”]/g, '')}”</h3>
                                                <p className="text-neutral-medium font-chinese leading-relaxed text-sm font-normal">
                                                    {item.text}
                                                </p>
                                            </div>
                                            <div className="mt-8 flex items-center gap-4 border-t border-border-light/50 pt-6">
                                                <img alt="Client photo" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src={item.avatar} />
                                                <div>
                                                    <p className="font-medium text-neutral-dark font-display text-sm">{item.name}</p>
                                                    <p className="text-[10px] text-neutral-medium uppercase tracking-wider">{item.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* XHS Mockup Layer */}
                                        <div className="xhs-mockup absolute inset-0 z-20 bg-white p-6 flex flex-col justify-between">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                                                    <img alt="Client photo" className="w-full h-full object-cover" src={item.avatar} />
                                                </div>
                                                <span className="text-xs font-bold text-neutral-dark">{item.xhsHandle}</span>
                                                <span className="ml-auto text-xs text-neutral-400 font-display">1d ago</span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="text-sm font-chinese text-neutral-dark leading-relaxed mb-3 font-normal">
                                                    {item.xhsText}
                                                </p>
                                                <div className="flex gap-2 mb-2">
                                                    {item.images.map((img, i) => (
                                                        <div key={i} className="h-20 w-20 bg-neutral-100 rounded overflow-hidden">
                                                            <img className="w-full h-full object-cover" src={img} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="flex gap-4">
                                                    <span className="flex items-center gap-1 text-xs text-neutral-500 hover:text-primary transition-colors cursor-pointer">
                                                        <span className="material-symbols-outlined text-lg">favorite</span> {item.hearts}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-dark transition-colors cursor-pointer">
                                                        <span className="material-symbols-outlined text-lg">chat_bubble</span> {item.comments}
                                                    </span>
                                                </div>
                                                <span className="flex items-center gap-1 text-xs text-neutral-500 hover:text-primary transition-colors cursor-pointer">
                                                    <span className="material-symbols-outlined text-lg">bookmark</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="group relative flex flex-col md:translate-y-16 hidden md:flex">
                                <div className="relative bg-white p-6 md:p-8 h-full border border-border-light/50 flex flex-col justify-center text-left">
                                    <h3 className="font-chinese font-medium text-lg text-neutral-dark mb-3">查看更多妝髮作品紀錄</h3>
                                    <p className="text-neutral-medium text-sm font-chinese leading-relaxed mb-6">更多不同場景與風格的妝髮呈現，<br />收錄於小紅書。</p>
                                    <a className="text-sm font-medium text-primary hover:underline font-display group-hover:underline w-fit" href="#">
                                        前往小紅書瀏覽 →
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

export default Testimonials;
