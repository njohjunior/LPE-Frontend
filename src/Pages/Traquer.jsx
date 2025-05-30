import React from 'react';
import Lottie from 'lottie-react';
import Position from '../Assets/Lotties/position.json';

export default function Traquer() {
  return (
    <div className="bg-white-smoke py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg bg-white px-10 py-10 text-center space-y-8">
        <Lottie animationData={Position} className='w-32 mx-auto' />
        <p className="text-gray-700">Entrez votre identifiant pour suivre votre livraison en temps réel.</p>

        <form action="/tracking-result" method="GET" className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            name="trackingId"
            placeholder="Ex: LPX123456"
            required
            className="w-full md:w-2/3 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-wine"
          />
          <button
            type="submit"
            className="bg-wine text-white px-6 py-3 rounded font-semibold hover:bg-wine/90 transition"
          >
            Rechercher
          </button>
        </form>
      </div>
    </div>
  );
}
