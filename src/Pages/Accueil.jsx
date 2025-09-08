import React, { useState } from "react";
import Lottie from "lottie-react";
import Fast from "../Assets/Lotties/fast.json";
import Mobile from "../Assets/Lotties/mobile.json";
import Homme from "../Assets/Lotties/Homme.json";

import Livreur from "../Assets/livreur.png";
import Presentation from "../Assets/presentation.jpg";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShieldAlt,
  faRocket,
  faUsers,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { FAQ } from "../Components/Faq";
import { CTA } from "../Components/Cta";

export default function Accueil() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/tracking-result?trackingId=${trackingId}`);
  };

  const reviews = [
    {
      name: "Jean M.",
      text: "Un service rapide et professionnel. Mon colis est arrivé en moins d'une heure !",
      rating: 5,
    },
    {
      name: "Aminata D.",
      text: "Application facile à utiliser et livreurs très courtois. Je recommande vivement.",
      rating: 4,
    },
    {
      name: "Carlos N.",
      text: "Service de suivi très pratique. J’ai pu suivre mon colis en temps réel sans stress.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-wine/90 to-black text-white min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
              Votre service de Livraison{" "}
              <br /> 
            </h1>
            <h1 className="text-5xl md:text-5xl font-extrabold uppercase leading-tight"><span className="text-wine bg-white">Rapide & Fiable</span></h1>
            <p className="text-lg text-gray-200 max-w-lg">
              Suivez vos colis en temps réel et gérez vos livraisons
              efficacement avec <span className="font-bold">Le Point Express</span>.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-md mx-auto md:mx-0"
            >
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Ex: LPX123456"
                required
                className="flex-grow px-4 py-3 rounded-l-lg border-none focus:ring-2 focus:ring-yellow-400 text-black"
              />
              <button
                type="submit"
                className="bg-white border-l-2 border-wine text-wine font-semibold px-6 py-3 rounded-r-lg hover:bg-wine hover:text-white transition"
              >
                Traquer
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex justify-center"
          >
            <img src={Livreur} alt="Livreur" className="w-8/12 drop-shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* WHY US ICONS */}
      <section className="bg-white-smoke px-20 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: faShieldAlt, title: "Sécurité" },
            { icon: faRocket, title: "Rapidité" },
            { icon: faUsers, title: "Communauté" },
            { icon: faCogs, title: "Innovation" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="2x"
                className="text-wine mb-4"
              />
              <h3 className="font-bold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="bg-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="md:w-1/2"
        >
          <img
            src={Presentation}
            alt="Présentation"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-wine">
            Découvrez notre univers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            L’innovation est au cœur de chaque projet. Nous proposons des
            solutions logistiques et digitales pour simplifier vos activités,
            améliorer votre productivité et maximiser vos résultats.
          </p>
          <a
            href="/apropos"
            className="inline-block bg-wine text-white px-6 py-3 rounded-lg font-semibold hover:bg-wine/90 transition"
          >
            En savoir plus
          </a>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="bg-white-smoke py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-wine mb-12">
          Pourquoi nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Homme,
              title: "Suivi en temps réel",
              text: "Interface intuitive pour suivre vos colis sans stress.",
            },
            {
              icon: Fast,
              title: "Livraison rapide",
              text: "Un réseau optimisé pour livrer vite et en toute sécurité.",
            },
            {
              icon: Mobile,
              title: "Accessibilité mobile",
              text: "Application dédiée pour gérer vos courses partout.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <Lottie animationData={card.icon} className="w-40 mx-auto" />
              <h3 className="text-xl font-bold text-wine mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-wine to-black py-20 px-6 md:px-16 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Avis clients</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/10 p-6 rounded-xl shadow-lg text-center space-y-4"
            >
              <p className="italic">“{review.text}”</p>
              <div className="text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                ))}
              </div>
              <h4 className="font-semibold">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/** FAQ */}

      <FAQ />

      {/**CTA */}

      <CTA />
    </>
  );
}
