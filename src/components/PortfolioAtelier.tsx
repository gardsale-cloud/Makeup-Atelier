"use client";

import Image from "next/image";

const PortfolioAtelier = () => {
    return (
        <section className="py-24 md:py-32 bg-atelier-bg" id="portfolio">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="mb-16 md:mb-24">
                    <span className="text-atelier-accent text-xs tracking-[0.3em] uppercase font-display mb-6 block">Selected Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-chinese text-atelier-text leading-tight font-normal mb-5">
                        精選<span className="serif-font italic text-atelier-accent">作品</span>
                    </h2>
                    <p className="text-atelier-muted font-chinese font-light text-[15px] sm:text-base max-w-xl leading-relaxed">
                        實際新娘妝髮呈現。
                    </p>
                    <div className="h-px w-20 bg-atelier-accent mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[5.8fr_4.2fr] gap-12 items-start">
                    {/* Left: Anchor Column (Curated Primary - 58%) */}
                    <div className="flex flex-col">
                        <div className="aspect-[4/5] relative overflow-hidden portfolio-image-wrapper w-full">
                            <Image
                                src="/images/portfolio/portfolio_02.jpg"
                                alt="Minimal Bridal Portrait"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right: Curated Column (Gallery Stack - 42%) */}
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-y-12 mb-12 md:mb-16">
                            {/* Top Image (Clean Secondary Presence) */}
                            <div className="w-full">
                                <div className="aspect-[4/4.7] relative overflow-hidden portfolio-image-wrapper w-full">
                                    <Image
                                        src="/images/portfolio/portfolio_01.jpg"
                                        alt="Selected Look 1"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                </div>
                            </div>

                            {/* Bottom Row (Symmetrical Pair) */}
                            <div className="grid grid-cols-2 gap-8 items-stretch">
                                {/* Bottom-Left */}
                                <div className="relative overflow-hidden portfolio-image-wrapper aspect-[4/5]">
                                    <Image
                                        src="/images/portfolio/portfolio_03.jpg"
                                        alt="Support Look 1"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>
                                {/* Bottom-Right */}
                                <div className="relative overflow-hidden portfolio-image-wrapper aspect-[4/5]">
                                    <Image
                                        src="/images/portfolio/portfolio_04.jpg"
                                        alt="Support Look 2"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Link to more works */}
                        <div className="flex justify-center md:justify-end">
                            <a
                                className="group/link text-[10px] md:text-xs font-medium text-atelier-text hover:opacity-60 transition-opacity duration-300 ease-out tracking-[0.2em] uppercase flex items-center gap-3 font-chinese"
                                href="https://www.xiaohongshu.com/user/profile/63d5ee2b0000000026010e28?utm_source=website&utm_medium=referral&utm_campaign=makeupphuket"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                完整紀錄亦可於小紅書查看
                                <span className="transition-transform duration-300 ease-out group-hover/link:translate-x-1.5 inline-block text-atelier-accent">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioAtelier;
