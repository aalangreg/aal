import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded bg-rose-200 flex items-center justify-center text-rose-600 font-bold text-xl">
            A
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Aalanshop</span>
        </div>
        
        <p className="text-slate-500 max-w-sm mb-6">
          Votre référence beauté au Gabon. Produits authentiques directement importés du Canada et des États-Unis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-slate-600 mb-8">
          <a href="https://aalanshop.ca" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">
            aalanshop.ca
          </a>
          <a href="https://wa.me/15142607145" target="_blank" rel="noreferrer" className="hover:text-rose-600 transition-colors">
            WhatsApp: +1 (514) 260-7145
          </a>
        </div>

        <div className="h-px w-full max-w-md bg-slate-200 mb-8"></div>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Aalanshop. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
