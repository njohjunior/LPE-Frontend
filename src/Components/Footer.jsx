import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1 : Logo + Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Le Point Express<span className='text-wine'>.</span></h2>
          <p className="mb-4 text-gray-400">
            Abonnez-vous à notre newsletter pour recevoir nos dernières nouvelles.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Votre email"
              className="p-2 rounded-l bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-wine text-white p-2 rounded-r"
            >
              S'abonner
            </button>
          </form>
        </div>

        {/* Section 2 : Liens utiles */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="/services" className="hover:text-white">Nos Services</a></li>
            <li><a href="/apropos" className="hover:text-white">À propos</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Section 3 : Contact + Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Téléphone : +237 6 XX XX XX XX</li>
            <li>Email : contact@xxxxxxxxx.cm</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" className="hover:text-wine"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://www.twitter.com" className="hover:text-wine"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com" className="hover:text-wine"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

        {/* Section 4 : Politique */}
        <div>
          <h3 className="text-xl font-bold mb-4">Politiques</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="https://www.google.com" className="hover:text-white">Politique de confidentialité</a></li>
            <li><a href="https://www.google.com" className="hover:text-white">Termes & Conditions</a></li>
            <li><a href="https://www.google.com" className="hover:text-white">Mentions légales</a></li>
          </ul>
        </div>

      </div>

      {/* Barre du bas */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Le Point Express. Tous droits réservés.
      </div>
    </footer>
  );
}
