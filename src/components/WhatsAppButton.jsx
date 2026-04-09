import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/15142607145`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}
