import React from "react";
import { MousePointerClick, MessageCircle, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Parcourez",
      desc: "Découvrez notre catalogue de produits authentiques.",
      icon: <MousePointerClick className="h-8 w-8 text-rose-500" />,
      color: "bg-rose-100"
    },
    {
      id: 2,
      title: "Commandez",
      desc: "Passez votre commande facilement via WhatsApp.",
      icon: <MessageCircle className="h-8 w-8 text-green-500" />,
      color: "bg-green-100"
    },
    {
      id: 3,
      title: "Recevez",
      desc: "Soyez livré rapidement à votre domicile à Libreville.",
      icon: <Home className="h-8 w-8 text-blue-500" />,
      color: "bg-blue-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment ça marche ?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Acheter vos produits préférés n'a jamais été aussi simple. En trois étapes, tout est réglé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10 border-t-2 border-dashed border-slate-200"></div>
          
          {steps.map((step) => (
            <Card key={step.id} className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full ${step.color} shadow-inner`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <span className="text-slate-400 mr-2">{step.id}.</span> {step.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
