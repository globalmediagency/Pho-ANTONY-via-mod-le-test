import { useState } from "react";
import { restaurantData } from "../data";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  UtensilsCrossed,
} from "lucide-react";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <footer id="contact" className="bg-[#1a1a1a] text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={restaurantData.logo}
                alt="Logo"
                className="w-12 h-12 object-contain filter brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                {restaurantData.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              {restaurantData.slogan}
            </p>
            <div className="flex gap-4">
              <a
                href={restaurantData.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={restaurantData.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={restaurantData.links.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <UtensilsCrossed className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium text-white uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#800020] shrink-0" />
                <span>{restaurantData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#800020] shrink-0" />
                <span>{restaurantData.phone}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium text-white uppercase tracking-wider">
              Horaires
            </h4>
            <ul className="space-y-2 text-sm">
              {restaurantData.hours.map((h, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-stone-800 pb-2"
                >
                  <span className="text-stone-400">{h.day}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium text-white uppercase tracking-wider">
              Liens Utiles
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={restaurantData.links.uberEats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800020]"></span>
                  Commander sur Uber Eats
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsLegalModalOpen(true)}
                  className="hover:text-white transition-colors flex items-center gap-2 text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800020]"></span>
                  Mentions Légales
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} {restaurantData.name}. Tous droits
            réservés.
          </p>
          <p>Création de site internet</p>
        </div>
      </div>
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </footer>
  );
}
