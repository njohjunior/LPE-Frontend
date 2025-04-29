import React from 'react';
import Lottie from 'lottie-react';
import Tracking from '../Assets/Lotties/Tracking.json';
import Logo1 from '../Assets/excel.png';
import Logo2 from '../Assets/netflix.png';
import Logo3 from '../Assets/samsung.png';
import Logo4 from '../Assets/social.png';
import Logo5 from '../Assets/spotify.png';

export default function Accueil() {


  return (
    <>
      {/**HERO SECTION */}
      <section className="flex items-center justify-between px-10 py-5 bg-gray-200">
        {/* Première partie : Texte d'appel, description et formulaire */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-6xl uppercase font-bold text-black">
            Votre Livraison <span className='text-wine'>Rapide</span> et <span className='text-wine'>Fiable</span>
          </h1>
          <p className="text-xl text-gray-600">
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
      <section className="bg-white py-14 px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 uppercase">Ils nous font confiance</h2>
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
              className="h-20 w-auto transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </section>

      {/**WHY US SECTION */}
      <section>
        
      </section>
    </>
  );
}
