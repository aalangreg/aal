import React from "react";
import { Truck, MapPin, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DeliveryInfo() {
  return (
    <section id="delivery" className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-rose-400 mb-6 border border-slate-700">
              <Truck className="mr-2 h-4 w-4" /> Expédition & Livraison
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Livraison rapide et sécurisée
            </h2>
            <p className="mt-4 text-lg text-slate-300 mb-8 max-w-lg">
              Nous livrons vos produits de beauté préférés rapidement. Le paiement s'effectue de manière sécurisée via Airtel Money.
            </p>
            
            <div className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 p-4 rounded-2xl max-w-md">
               <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                  <Wallet className="h-6 w-6 text-white" />
               </div>
               <div>
                 <p className="font-bold text-white">Paiement Mobile</p>
                 <p className="text-sm text-slate-400">Accepté via Airtel Money</p>
               </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-slate-800 border-slate-700 border hover:border-rose-500/50 transition-colors">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Libreville</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-white">2 000 <span className="text-sm font-medium text-slate-400">FCFA</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 border hover:border-rose-500/50 transition-colors">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Owendo & Akanda</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-white">3 000 <span className="text-sm font-medium text-slate-400">FCFA</span></p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
