import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BrandsCarousel from "./components/BrandsCarousel";
import Catalog from "./components/Catalog";
import HowItWorks from "./components/HowItWorks";
import DeliveryInfo from "./components/DeliveryInfo";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <BrandsCarousel />
        <Catalog />
        <HowItWorks />
        <DeliveryInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
