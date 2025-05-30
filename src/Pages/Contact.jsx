import React from 'react';
import Lottie from 'lottie-react';
import Phone from '../Assets/Lotties/phone.json';
import Email from '../Assets/Lotties/Email.json';
import Position from '../Assets/Lotties/position.json';

export default function Contact() {
  return (
    <div className="bg-white space-y-16 pb-20">

      {/* Première section : Infos de contact */}
      <div className="bg-white-smoke py-10 px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-3 py-10 shadow-lg bg-white rounded-lg">
          <Lottie animationData={Phone} className='w-32 mx-auto' />
          <h3 className="text-xl font-semibold">Téléphone</h3>
          <p className="text-gray-600">+237 6 XX XX XX XX</p>
        </div>
        <div className="space-y-3 py-10 shadow-lg bg-white rounded-lg">
          <Lottie animationData={Email} className='w-32 mx-auto' />
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-600">contact@xxxxxxxx.cm</p>
        </div>
        <div className="space-y-3 py-10 shadow-lg bg-white rounded-lg">
          <Lottie animationData={Position} className='w-32 mx-auto' />
          <h3 className="text-xl font-semibold">Siège social</h3>
          <p className="text-gray-600">Yaoundé, Cameroun</p>
        </div>
      </div>

      {/* Deuxième section : Formulaire de contact */}
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Envoyez-nous un message</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nom et prénom"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
            />
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
            />
          </div>
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
          />
          <textarea
            placeholder="Votre message"
            rows="5"
            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
          ></textarea>
          <button
            type="submit"
            className="bg-wine text-white font-semibold px-6 py-3 rounded hover:bg-wine/90 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
