import React from 'react';

export default function Recrutement() {
  return (
    <div className="bg-white-smoke px-6 md:px-20 py-16 space-y-16">

      {/* Introduction */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-wine mb-4">Rejoignez notre équipe</h1>
        <p className="text-gray-700 text-lg">
          Chez Le Point Express, nous croyons au talent local. Si vous êtes passionné(e) par la logistique,
          la technologie ou le service client, n'hésitez pas à postuler. Ensemble, construisons l’avenir de la livraison en Afrique !
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Formulaire de Candidature</h2>
        <form className="space-y-6">

          {/* Nom & Prénom */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="nom" className="mb-1 font-medium">Nom</label>
              <input id="nom" type="text" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="prenom" className="mb-1 font-medium">Prénom</label>
              <input id="prenom" type="text" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
            </div>
          </div>

          {/* Email & Téléphone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">Adresse e-mail</label>
              <input id="email" type="email" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telephone" className="mb-1 font-medium">Téléphone</label>
              <input id="telephone" type="tel" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
            </div>
          </div>

          {/* Poste souhaité */}
          <div className="flex flex-col">
            <label htmlFor="poste" className="mb-1 font-medium">Poste souhaité</label>
            <input id="poste" type="text" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
          </div>

          {/* CV & Lettre */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="cv" className="mb-1 font-medium">
                <span className="text-red-600">*</span> CV
              </label>
              <input id="cv" type="file" accept=".pdf,.doc,.docx" className="p-3 border rounded bg-white" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lettre" className="mb-1 font-medium">
                <span className="text-red-600">*</span> Lettre de motivation
              </label>
              <input id="lettre" type="file" accept=".pdf,.doc,.docx" className="p-3 border rounded bg-white" />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium">Message (optionnel)</label>
            <textarea id="message" rows="4" className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine" />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="bg-wine text-white font-semibold px-6 py-3 rounded hover:bg-wine/90 transition"
          >
            Envoyer la candidature
          </button>
        </form>
      </div>
    </div>
  );
}
