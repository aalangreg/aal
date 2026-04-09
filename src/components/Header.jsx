import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Header() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Placeholder for actual SVG logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("hero")}>
          <div className="h-8 w-8 rounded bg-rose-200 flex items-center justify-center text-rose-600 font-bold text-xl">
            A
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">Aalanshop</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <button onClick={() => handleScroll("catalog")} className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
            Catalogue
          </button>
          <button onClick={() => handleScroll("how-it-works")} className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
            Comment ça marche
          </button>
          <button onClick={() => handleScroll("delivery")} className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors">
            Livraison
          </button>
        </nav>

        <Button
          onClick={() => window.open("https://wa.me/15142607145", "_blank")}
          variant="default"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-5 shadow-md hover:shadow-lg transition-all"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </div>
    </header>
  );
}
