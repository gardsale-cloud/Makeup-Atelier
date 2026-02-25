import React from "react";
import { getAssetPath } from "@/utils/paths";

const testimonials = [
    {
        name: "Chloe Zhang",
        location: "Sri Panwa",
        quote: "妝面太高級了",
        text: "完全是我想要的泰式輕混血感，眼妝超級精緻。在普吉島這麼熱的天氣下，底妝居然一天都沒脫...",
        xhsHandle: "Chloe.Z",
        xhsText: "姐妹們！普吉島跟妝直接閉眼沖這家！💯 化妝老師太專業了，完全get到了我想要的泰式輕混血妝容，眼妝超級精緻，而且底妝 в 普吉島這麼熱的天氣下居然一天都沒脫，太厲害了！ #普吉島婚禮 #新娘跟妝",
        avatar: getAssetPath("/images/avatars/avatar-1.jpg"),
        hearts: 128,
        comments: 32,
        images: [
            getAssetPath("/images/hero-main.jpg"),
            getAssetPath("/images/avatars/avatar-3.jpg")
        ]
    },
    {
        name: "Emily Chen",
        location: "The Shore",
        quote: "像朋友一樣貼心",
        text: "溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態...",
        xhsHandle: "Emily_C",
        xhsText: "真的是神仙化妝師！🧚‍♀️ 溝通非常順暢，試妝的時候就覺得很細心。婚禮當天早上不僅化得好，還一直幫我調整狀態，像朋友一樣貼心. 強烈推薦給來普吉島備婚的姐妹！ #普吉島旅拍 #海外婚禮",
        avatar: getAssetPath("/images/avatars/avatar-2.jpg"),
        hearts: 89,
        comments: 14,
        images: [
            getAssetPath("/images/avatars/avatar-2.jpg")
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
        avatar: getAssetPath("/images/avatars/avatar-3.jpg"),
        hearts: 204,
        comments: 45,
        images: [
            getAssetPath("/images/avatars/avatar-3.jpg"),
            getAssetPath("/images/hero-main.jpg")
        ]
    }
];

const TestimonialsAtelier = () => {
    return (
        <section className="py-32 bg-atelier-bg border-t border-atelier-border" id="testimonials-atelier">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:h-fit">
                        <span className="text-atelier-accent text-xs tracking-[0.4em] uppercase font-display mb-6 block">Editorial Reviews</span>
                        <h2 className="text-3xl lg:text-4xl font-chinese text-atelier-text leading-tight font-normal mb-8">
                            她們的信任，<br />是 <span className="italic font-serif text-atelier-accent">最真實</span> 的肯定
                        </h2>
                        <p className="text-atelier-muted font-chinese text-sm leading-relaxed max-w-sm">
                            來自婚禮、旅拍及活動客戶的真實分享。自然、精緻且持久的妝髮，陪伴每個重要時刻。
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {testimonials.map((item, index) => (
                                <div key={index} className={`group relative flex flex-col ${item.className || ""}`}>
                                    <div className="relative bg-atelier-bg p-10 aspect-[4/3] border border-atelier-border transition-all duration-300 ease-out overflow-hidden">
                                        {/* Background Decoration */}
                                        <div className="absolute top-0 left-2 font-serif text-[10rem] leading-none text-atelier-accent opacity-[0.05] pointer-events-none italic">“</div>

                                        {/* Main Content (Quote) */}
                                        <div className="relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <h3 className="font-chinese font-medium text-lg text-atelier-text mb-4 italic">“{item.quote}”</h3>
                                                <p className="text-atelier-muted font-chinese leading-relaxed text-sm font-light">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Image Overlay with internal padding */}
                                        <div className="absolute inset-0 z-20 bg-atelier-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out overflow-hidden p-6">
                                            <div className="w-full h-full overflow-hidden">
                                                <img
                                                    src={item.images[0]}
                                                    alt="Review Highlight"
                                                    className="w-full h-full object-cover grayscale-[40%] contrast-[110%] brightness-[95%]"
                                                />
                                            </div>
                                            <div className="absolute inset-6 bg-atelier-bg/5 pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* View More Card */}
                            <div className="group relative flex flex-col md:translate-y-16 hidden md:flex">
                                <div className="bg-atelier-bg p-10 aspect-[4/3] border border-atelier-border flex flex-col justify-center text-left">
                                    <h3 className="font-chinese font-medium text-lg text-atelier-text mb-3">查看更多妝髮作品紀錄</h3>
                                    <p className="text-atelier-muted text-xs font-chinese leading-relaxed mb-8 font-light">更多不同場景與風格 of 妝髮呈現，<br />收錄於小紅書。</p>
                                    <a className="text-xs font-medium text-atelier-text hover:opacity-60 transition-opacity duration-300 ease-out tracking-widest uppercase flex items-center gap-2 group" href="#">
                                        前往小紅書瀏覽
                                        <span className="text-sm">→</span>
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
