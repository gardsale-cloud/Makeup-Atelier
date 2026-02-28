import NavbarAtelierEn from "@/components/en/NavbarAtelierEn";
import HeroAtelierEn from "@/components/en/HeroAtelierEn";
import ServicesAtelierEn from "@/components/en/ServicesAtelierEn";
import PortfolioAtelierEn from "@/components/en/PortfolioAtelierEn";
import WhyMeAtelierEn from "@/components/en/WhyMeAtelierEn";
import TestimonialsAtelierEn from "@/components/en/TestimonialsAtelierEn";
import ProcessAtelierEn from "@/components/en/ProcessAtelierEn";
import FAQAtelierEn from "@/components/en/FAQAtelierEn";
import ContactAtelierEn from "@/components/en/ContactAtelierEn";
import FooterAtelierEn from "@/components/en/FooterAtelierEn";
import ContactModalAtelierEn from "@/components/en/ContactModalAtelierEn";
import PrivacyModalAtelierEn from "@/components/en/PrivacyModalAtelierEn";

export const metadata = {
    title: "Phuket Private Makeup & Hair Artist | Destination Wedding Styling",
    description: "Professional private makeup and hair styling services for weddings and travel shoots in Phuket. One-on-one refined styling experience.",
};

export default function EnglishHome() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavbarAtelierEn />
            <HeroAtelierEn />
            <ServicesAtelierEn />
            <PortfolioAtelierEn />
            <WhyMeAtelierEn />
            <TestimonialsAtelierEn />
            <ProcessAtelierEn />
            <FAQAtelierEn />
            <ContactAtelierEn />
            <FooterAtelierEn />

            {/* Localized Modals */}
            <ContactModalAtelierEn />
            <PrivacyModalAtelierEn />
        </main>
    );
}
