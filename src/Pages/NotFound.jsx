import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-96 flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-wine">404</h1>
        <p className="text-xl text-gray-700">Oups ! La page que vous cherchez n’existe pas.</p>
        <p className="text-gray-500">Il se peut que l'URL soit incorrecte ou que la page ait été déplacée.</p>
        <Link
          to="/"
          className="inline-block bg-wine text-white px-6 py-3 rounded font-medium hover:bg-wine/90 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
