import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }) {
  const handleOrder = () => {
    const text = encodeURIComponent(
      `Bonjour, je souhaite commander : ${product.name} (${product.brand}) au prix de ${product.price} FCFA.`
    );
    window.open(`https://wa.me/15142607145?text=${text}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
      <div className="relative aspect-square overflow-hidden bg-slate-100 p-6 flex justify-center items-center">
        <Badge className="absolute top-3 left-3 z-10 bg-white/80 text-rose-600 hover:bg-white backdrop-blur-md border border-rose-100 shadow-sm">
          {product.category}
        </Badge>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="text-sm text-slate-500 mb-1">{product.brand}</div>
        <CardTitle className="text-lg font-bold text-slate-800 line-clamp-1">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="text-xl font-extrabold text-rose-600">
          {product.price.toLocaleString("fr-FR")} FCFA
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleOrder} 
          className="w-full bg-slate-900 hover:bg-rose-600 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-rose-500/25"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Commander
        </Button>
      </CardFooter>
    </Card>
  );
}
