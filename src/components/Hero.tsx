import { motion } from "motion/react";
import { restaurantData } from "../data";
import { MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantData.gallery.lieu[1]}
          alt="Intérieur du restaurant Pho ANTONY"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={restaurantData.logo}
            alt="Logo"
            className="w-32 h-32 mx-auto mb-8 object-contain filter drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            {restaurantData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            {restaurantData.slogan}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#menu"
              className="px-8 py-4 bg-[#800020] text-white rounded-full font-medium text-lg hover:bg-[#5C4033] transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Découvrir le Menu
            </a>
            <a
              href={restaurantData.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#800020] rounded-full font-medium text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Commander en ligne
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-[#800020]" />
              <span>{restaurantData.address}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5 text-[#800020]" />
              <span>Ouvert aujourd'hui</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
