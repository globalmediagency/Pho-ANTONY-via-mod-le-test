import { useState } from "react";
import { motion } from "motion/react";
import { restaurantData } from "../data";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("entrees");

  const tabs = [
    { id: "entrees", label: "Entrées" },
    { id: "plats", label: "Plats" },
    { id: "desserts", label: "Desserts" },
    { id: "boissons", label: "Boissons" },
  ];

  const renderItems = (items: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-all group flex flex-col"
          >
            {item.image && (
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif font-medium text-gray-900">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-[#800020] whitespace-nowrap ml-4">
                  {item.price} €
                </span>
              </div>
              {item.details && (
                <p className="text-sm text-gray-500 mt-2 italic">
                  {item.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#800020] uppercase mb-3">
            Notre Carte
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            Découvrez nos spécialités
          </h3>
          <div className="w-24 h-1 bg-[#800020] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-[#800020] text-white shadow-md"
                  : "bg-stone-100 text-gray-600 hover:bg-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "entrees" && renderItems(restaurantData.menu.entrees)}
          {activeTab === "plats" && renderItems(restaurantData.menu.plats)}
          {activeTab === "desserts" &&
            renderItems(restaurantData.menu.desserts)}
          {activeTab === "boissons" &&
            renderItems(restaurantData.menu.boissons)}
        </div>
      </div>
    </section>
  );
}
