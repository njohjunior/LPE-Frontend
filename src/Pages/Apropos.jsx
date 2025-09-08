import React from 'react';
import { motion } from 'framer-motion';
import Directeur from '../Assets/directeur.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBolt, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Apropos() {
  return (
    <div className="bg-white-smoke px-6 md:px-20 py-20 space-y-20">

      {/* Mot du directeur */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center bg-white-smoke"
      >
        <img
          src={Directeur}
          alt="Directeur Le Point Express"
          className="rounded-xl shadow-lg max-w-2xl"
        />
        <div className="md:w-1/2 md:pl-12 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Mot du Directeur</h2>
          <p className="text-gray-600">
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
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-10 shadow-md flex-1 hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold text-wine mb-4">Notre Mission</h3>
          <p className="text-gray-700 text-lg">
            Offrir des services logistiques de qualité, accessibles et adaptés aux besoins des PME, startups,
            e-commerçants et particuliers. Nous mettons l’innovation, la fiabilité et la proximité au cœur de chaque livraison.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-10 shadow-md flex-1 hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold text-wine mb-4">Notre Vision</h3>
          <p className="text-gray-700 text-lg">
            Devenir le leader de la logistique intelligente en Afrique centrale, en misant sur la technologie,
            la transparence et un engagement fort envers nos clients.
          </p>
        </motion.div>
      </div>

      {/* Nos valeurs */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <h2 className="text-3xl font-bold text-center text-wine mb-10">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center transition">
            <FontAwesomeIcon icon={faShieldAlt} className="text-wine text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-700">Garantir la sécurité de chaque colis et la confiance de nos clients.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center transition">
            <FontAwesomeIcon icon={faBolt} className="text-wine text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapidité</h3>
            <p className="text-gray-700">Livraisons rapides et efficaces, adaptées aux besoins des clients.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center transition">
            <FontAwesomeIcon icon={faUsers} className="text-wine text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proximité</h3>
            <p className="text-gray-700">Une équipe toujours proche et à l’écoute de nos clients.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl text-center transition">
            <FontAwesomeIcon icon={faLightbulb} className="text-wine text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">Utilisation de technologies modernes pour améliorer nos services.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-wine py-20 px-6 md:px-20 rounded-xl text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Découvrez nos services
        </h2>
        <p className="text-lg mb-8">
          Nous proposons des solutions adaptées à vos besoins pour une logistique fluide et efficace.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/services"
          className="inline-block bg-white text-wine font-semibold px-8 py-4 rounded shadow hover:bg-gray-100 transition"
        >
          En savoir plus
        </motion.a>
      </motion.section>

    </div>
  );
}
