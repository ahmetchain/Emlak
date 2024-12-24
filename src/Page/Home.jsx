import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OpportunitySection from "../components/OpportunitySection";
import PropertyGallery from "../components/PropertyGallery";
import ServicesSection from "../components/ServicesSection";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyInvestSection from "../components/WhyInvestSection";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <Header page={"home"} />
        <HeroSection />
        <WhatsAppButton />
        <AboutSection />
        <OpportunitySection />
        <PropertyGallery />
        <WhyInvestSection />
        <ServicesSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}