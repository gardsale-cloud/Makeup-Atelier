import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function OriginalPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Process />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
