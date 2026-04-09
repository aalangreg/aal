import React, { useEffect, useState } from "react";

export default function BrandsCarousel() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/data/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((err) => console.error("Failed to load brands:", err));
  }, []);

  if (!brands.length) return null;

  // Duplicate for seamless loop
  const carouselItems = [...brands, ...brands, ...brands];

  return (
    <section className="border-y border-slate-200 bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Nos marques authentiques
        </h2>
      </div>
      
      <div className="relative flex w-full max-w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {carouselItems.map((brand, idx) => (
            <div key={`${brand.id}-${idx}`} className="mx-8 flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-12 w-auto object-contain max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
