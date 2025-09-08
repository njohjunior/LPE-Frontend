import React from 'react';
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../Components/PrimaryButton';
import House from '../Assets/Lotties/house.json';
import Express from '../Assets/Lotties/Express.json';
import Tracking from '../Assets/Lotties/Tracking.json';
import Discussion from '../Assets/Lotties/discussion.json';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

export default function NosServices() {
  const services = [
    {
      title: 'Services personnalisés',
      description: "Nous offrons des solutions adaptées aux besoins des PME, e-commerçants et particuliers.",
      icon: Discussion,
    },
    {
      title: 'Livraison express',
      description: "Nous livrons vos colis rapidement et en toute sécurité partout au Cameroun.",
      icon: Express,
    },
    {
      title: 'Stockage sécurisé',
      description: "Bénéficiez de nos entrepôts sécurisés pour stocker vos marchandises en toute confiance.",
      icon: House,
    },
    {
      title: 'Suivi en temps réel',
      description: "Grâce à notre plateforme, vous pouvez suivre vos colis à tout moment.",
      icon: Tracking,
    },
  ];

  return (
    <div className="bg-white-smoke py-20 px-6 md:px-20">
      {/* En-tête */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-wine uppercase underline underline-offset-8 mb-5">Nos Services</h2>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
          Découvrez les solutions logistiques que nous mettons à votre disposition pour simplifier vos opérations.
        </p>
      </div>

      {/* Grille de services avec animation */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl hover:scale-105 transition transform"
          >
            <div className="w-52 mx-auto">
              <Lottie animationData={service.icon} loop={true} />
            </div>
            <h3 className="text-xl font-bold text-wine my-4 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-center">{service.description}</p>
            <div className="text-center">
              <NavLink to="/contact">
                <PrimaryButton>Nous contacter</PrimaryButton>
              </NavLink>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
