import React from 'react';
import Lottie from 'lottie-react';
import Tracking from '../Assets/Lotties/Tracking.json';
import Fast from '../Assets/Lotties/fast.json';
import Mobile from '../Assets/Lotties/mobile.json';
import Homme from '../Assets/Lotties/Homme.json';
import Logo1 from '../Assets/logo Ipsum.png';
import Logo2 from '../Assets/logo Ipsum.png';
import Logo3 from '../Assets/logo Ipsum.png';
import Logo4 from '../Assets/logo Ipsum.png';
import Logo5 from '../Assets/logo Ipsum.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Accueil() {
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
      {/**HERO SECTION */}
      <section className="flex items-center justify-between px-10 py-5 bg-gray-200">
        {/* Première partie : Texte d'appel, description et formulaire */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-6xl uppercase font-bold text-black">
            Votre Livraison <span className='text-wine'>Rapide</span> et <span className='text-wine'>Fiable</span>
          </h1>
          <p className="text-lg font-semibold text-gray-600">
            Suivez vos colis en temps réel et gérez vos livraisons efficacement avec Le Point Express.
          </p>

          {/* Formulaire de recherche pour traquer une course */}
          <form className="mt-6">
            <input
              type="text"
              placeholder="Numéro de course..."
              className="p-3 w-full  max-w-md rounded-l focus:outline-none focus:border-wine"
            />
            <button type="submit" className="p-3 bg-wine text-white rounded-r font-semibold hover:bg-wine-dark transition-all">
              Traquer
            </button>
          </form>
        </div>

        {/* Deuxième partie : Animation Lottie */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie animationData={Tracking} />
        </div>
      </section>

      {/**PARTNERS SECTION */}
      <section className="bg-white-smoke py-14 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-wine font-bold mb-4 uppercase pb-5"><span className='underline underline-offset-8'>Ils nous font confiance</span></h2>
          <p className="text-gray-600 text-lg">
            Découvrez nos partenaires qui nous accompagnent dans notre mission de livraison rapide et fiable à travers le Cameroun.
          </p>
        </div>

        <div className="flex flex-wrap justify-around items-center gap-10">
          {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partenaire ${index + 1}`}
              className="h-44 w-auto transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </section>

      {/**WHY US SECTION*/}
      <section className="bg-gray-200 px-6 md:px-16 py-14 space-y-16">
        {/* Section Problème */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-wine uppercase pb-4"><span className='underline underline-offset-8'>Pourquoi nous ?</span></h2>
          <p className="text-gray-700 text-lg">
            Dans un marché camerounais où la logistique est souvent lente, imprévisible et peu digitalisée, les entreprises et particuliers rencontrent des difficultés à suivre et recevoir leurs colis efficacement.
          </p>
        </div>

        {/* Section Bénéfices */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-wine"
          >
            <Lottie animationData={Homme} className='w-52 mx-auto' />
            <h3 className="text-xl font-semibold text-wine mb-2">Suivi en temps réel</h3>
            <p className="text-gray-600">
              Les clients peuvent suivre leurs colis à tout moment grâce à une interface intuitive et dynamique.
            </p>
          </motion.div>

          {/* Carte 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-wine"
          >
            <Lottie animationData={Fast} className='w-52 mx-auto' />
            <h3 className="text-xl font-semibold text-wine mb-2">Livraison rapide</h3>
            <p className="text-gray-600">
              Grâce à notre réseau de livreurs optimisé, nous assurons une livraison rapide, fiable et sécurisée.
            </p>
          </motion.div>

          {/* Carte 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-wine"
          >
            <Lottie animationData={Mobile} className='w-52 mx-auto' />
            <h3 className="text-xl font-semibold text-wine mb-2">Accessibilité mobile</h3>
            <p className="text-gray-600">
              Une application mobile dédiée permet aux clients et livreurs de gérer les courses où qu’ils soient.
            </p>
          </motion.div>
        </div>
      </section>

      {/**AVIS*/}
      <section className="bg-white-smoke py-14 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-wine uppercase pb-4"><span className='underline underline-offset-8'>Ce que disent nos clients</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <p className="text-gray-700 italic">“{review.text}”</p>
              <div className="text-wine">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                ))}
              </div>
              <h4 className="font-semibold">{review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
