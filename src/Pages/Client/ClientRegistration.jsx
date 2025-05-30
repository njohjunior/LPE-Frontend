import React from 'react';

export default function ClientRegistration() {
    return (
        <div className="min-h-screen bg-white-smoke py-10 px-6 md:px-20">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12 space-y-10">
                {/* Texte d’introduction */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-wine">Créer un compte client</h1>
                    <p className="text-gray-600">
                        Inscrivez-vous pour suivre vos colis, commander facilement et profiter de nos services en ligne.
                    </p>
                </div>

                {/* Formulaire */}
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Nom"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                        <input
                            type="text"
                            placeholder="Prénom"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                        <input
                            type="tel"
                            placeholder="Téléphone"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                        <input
                            type="password"
                            placeholder="Confirmer le mot de passe"
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-wine text-white font-semibold px-6 py-3 rounded hover:bg-wine/90 transition"
                    >
                        Créer un compte
                    </button>
                </form>
            </div>
        </div>
    );
}
