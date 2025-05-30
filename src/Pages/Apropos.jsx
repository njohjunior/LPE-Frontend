import React from 'react';
import { motion } from 'framer-motion';
import Directeur from '../Assets/group.png';

export default function Apropos() {
  return (
    <div className="bg-white-smoke px-6 md:px-20 py-20 space-y-20">

      {/* Mot du directeur */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        <img
          src={Directeur}
          alt="Directeur Le Point Express"
          className="w-52 h-52 object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-wine mb-6 uppercase">Mot du Directeur</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Chez <strong>Le Point Express</strong>, nous croyons fermement que la logistique est la clé de la performance
            des entreprises modernes. Notre mission est d’accompagner les professionnels, commerçants et particuliers
            dans l’acheminement sécurisé, rapide et fiable de leurs colis à travers le Cameroun. <br /><br />
            Grâce à une équipe dynamique, des outils numériques innovants, et une approche centrée sur le client,
            nous bâtissons chaque jour une logistique plus fluide, plus accessible, et plus humaine.
          </p>
          <p className="mt-6 text-wine font-semibold">— Le Directeur Général</p>
        </div>
      </motion.section>

      {/* Mission et Vision */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-200 rounded-xl p-10 shadow-md flex-1"
        >
          <h3 className="text-2xl font-bold text-wine mb-4">Notre Mission</h3>
          <p className="text-gray-700 text-lg">
            Offrir des services logistiques de qualité, accessibles et adaptés aux besoins des PME, startups,
            e-commerçants et particuliers. Nous mettons l’innovation, la fiabilité et la proximité au cœur de chaque livraison.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-200 rounded-xl p-10 shadow-md flex-1"
        >
          <h3 className="text-2xl font-bold text-wine mb-4">Notre Vision</h3>
          <p className="text-gray-700 text-lg">
            Devenir le leader de la logistique intelligente en Afrique centrale, en misant sur la technologie,
            la transparence et un engagement fort envers nos clients.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
