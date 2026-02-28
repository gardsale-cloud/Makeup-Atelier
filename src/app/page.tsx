import NavbarAtelier from "@/components/NavbarAtelier";
import HeroAtelier from "@/components/HeroAtelier";
import ServicesAtelier from "@/components/ServicesAtelier";
import PortfolioAtelier from "@/components/PortfolioAtelier";
import WhyMeAtelier from "@/components/WhyMeAtelier";
import TestimonialsAtelier from "@/components/TestimonialsAtelier";
import ProcessAtelier from "@/components/ProcessAtelier";
import FAQAtelier from "@/components/FAQAtelier";
import ContactAtelier from "@/components/ContactAtelier";
import FooterAtelier from "@/components/FooterAtelier";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavbarAtelier />
            <HeroAtelier />
            <ServicesAtelier />
            <PortfolioAtelier />
            <WhyMeAtelier />
            <TestimonialsAtelier />
            <ProcessAtelier />
            <FAQAtelier />
            <ContactAtelier />
            <FooterAtelier />
        </main>
    );
}
