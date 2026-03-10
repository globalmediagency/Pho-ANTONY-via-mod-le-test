import { motion } from "motion/react";
import { restaurantData } from "../data";
import { ChefHat, Leaf, Heart, Utensils } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-[#800020]" />,
      title: "Fait Maison",
      description:
        "Des plats préparés avec amour et savoir-faire, selon les recettes traditionnelles vietnamiennes.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#800020]" />,
      title: "Cuisine Familiale",
      description:
        "Une histoire de famille qui se transmet de génération en génération.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#800020]" />,
      title: "Gastronomie Rapide",
      description:
        "L'alliance parfaite entre la qualité d'un repas gastronomique et la rapidité d'un service efficace.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#800020]" />,
      title: "Authenticité",
      description:
        "Des saveurs qui vous feront voyager directement au cœur du Vietnam.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#800020] uppercase mb-3">
            Notre Histoire
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            L'âme du Vietnam dans votre assiette
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bienvenue chez {restaurantData.name}. Nous sommes fiers de vous
            proposer une cuisine authentique et familiale, préparée avec
            passion. Notre objectif est de vous offrir une expérience culinaire
            inoubliable, alliant la richesse de la gastronomie vietnamienne à un
            service chaleureux et rapide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-50 mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
