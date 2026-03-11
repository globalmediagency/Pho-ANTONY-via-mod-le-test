import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { restaurantData } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center min-w-0 flex-1">
            <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
              <img
                className="h-10 sm:h-12 w-auto object-contain shrink-0"
                src={restaurantData.logo}
                alt={restaurantData.name}
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-lg sm:text-2xl font-bold text-[#800020] uppercase tracking-wider truncate">
                {restaurantData.name}
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#800020] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={restaurantData.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#800020] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#5C4033] transition-colors shadow-md"
            >
              Commander
            </a>
          </div>

          <div className="flex items-center md:hidden shrink-0 ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#800020] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={restaurantData.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-[#800020] text-white px-6 py-3 rounded-md text-base font-medium hover:bg-[#5C4033]"
            >
              Commander sur Uber Eats
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
