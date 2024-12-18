import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OpportunitySection from "./components/OpportunitySection";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <HeroSection />
        <WhatsAppButton />
        <AboutSection />
        <OpportunitySection />
      </div>
    </>
  );
}

export default App;
