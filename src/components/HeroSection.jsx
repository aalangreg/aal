import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Bonjour Aalanshop, j'aimerais passer commande !");
    window.open(`https://wa.me/15142607145?text=${text}`, "_blank");
  };

  return (
    <section id="hero" className="relative inset-0 overflow-hidden bg-rose-50 px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-rose-50 to-white -z-10"></div>
      
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center rounded-full border border-rose-200 bg-white/50 px-3 py-1 text-sm font-medium text-rose-800 backdrop-blur-sm shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
          Livraison rapide au Gabon
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          Beauté authentique importée du <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Canada</span> et des <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-rose-500">États-Unis</span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-slate-600 sm:text-xl md:text-2xl leading-relaxed">
          Soins du corps, brumes, lotions et maquillages originaux livrés directement chez vous à Libreville.
        </p>
        
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            onClick={openWhatsApp} 
            size="lg" 
            className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 transition-all duration-300 px-8 text-lg"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Commander sur WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
