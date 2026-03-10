import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { restaurantData } from '../data';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-gray-900">Mentions Légales</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-gray-600 space-y-6">
              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-2">1. Éditeur du site</h3>
                <p>Le site internet {restaurantData.name} est édité par le restaurant {restaurantData.name}.</p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Adresse :</strong> {restaurantData.address}</li>
                  <li><strong>Téléphone :</strong> {restaurantData.phone}</li>
                  <li><strong>SIRET :</strong> 818 080 400</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2. Hébergement</h3>
                <p>Ce site est hébergé par Google Cloud Platform.</p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-2">3. Propriété intellectuelle</h3>
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                  documents téléchargeables et les représentations iconographiques et photographiques. La reproduction 
                  de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-medium text-gray-900 mb-2">4. Protection des données personnelles (RGPD)</h3>
                <p>
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général 
                  sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de 
                  suppression et d'opposition aux données personnelles vous concernant. 
                </p>
                <p className="mt-2">
                  Ce site vitrine ne collecte aucune donnée personnelle à votre insu et n'utilise pas de cookies de 
                  traçage publicitaire.
                </p>
              </section>
            </div>
            
            <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#800020] text-white rounded-lg font-medium hover:bg-[#5C4033] transition-colors"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
