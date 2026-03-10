import { motion } from "motion/react";
import { restaurantData } from "../data";

export default function Gallery() {
  const images = [
    ...restaurantData.gallery.lieu,
    ...restaurantData.gallery.personnel,
    ...restaurantData.gallery.otherDishes,
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#800020] uppercase mb-3">
            Galerie
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            L'ambiance Pho ANTONY
          </h3>
          <div className="w-24 h-1 bg-[#800020] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm group"
            >
              <img
                src={img}
                alt={`Galerie ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
