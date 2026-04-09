import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [brandFilter, setBrandFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const brands = useMemo(() => {
    const list = new Set(products.map(p => p.brand));
    return ["All", ...Array.from(list)];
  }, [products]);

  const categories = useMemo(() => {
    const list = new Set(products.map(p => p.category));
    return ["All", ...Array.from(list)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = brandFilter === "All" || p.brand === brandFilter;
      const matchCat = categoryFilter === "All" || p.category === categoryFilter;
      return matchBrand && matchCat;
    });
  }, [products, brandFilter, categoryFilter]);

  return (
    <section id="catalog" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Notre Catalogue
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Découvrez nos produits importés, 100% authentiques.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Catégorie</label>
              <select 
                title="Catégorie"
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-rose-500 min-w-[160px]"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c === "All" ? "Toutes les catégories" : c}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase">Marque</label>
              <select 
                title="Marque"
                value={brandFilter} 
                onChange={(e) => setBrandFilter(e.target.value)}
                className="h-10 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-rose-500 min-w-[160px]"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>{b === "All" ? "Toutes les marques" : b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-xl text-slate-500 font-medium">Aucun produit ne correspond à vos critères.</p>
            <button 
              onClick={() => { setBrandFilter("All"); setCategoryFilter("All"); }}
              className="mt-4 text-rose-600 hover:text-rose-700 font-semibold"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
