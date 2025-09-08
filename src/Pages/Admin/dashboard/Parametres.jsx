import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Parametres({ admin, setAdmin }) {
    const [formData, setFormData] = useState({
        name: admin?.name || '',
        email: admin?.email || '',
        password: '',
        newPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // API call pour modifier nom/email
        toast.success('Profil mis à jour !');
        const updatedAdmin = { ...admin, name: formData.name, email: formData.email };
        setAdmin(updatedAdmin);
        localStorage.setItem('adminInfo', JSON.stringify(updatedAdmin));
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // API call pour modifier mot de passe
        toast.success('Mot de passe mis à jour !');
        setFormData({ ...formData, password: '', newPassword: '' });
    };

    const handleLogout = () => {
        localStorage.removeItem('adminInfo');
        setAdmin(null);
        toast('Déconnecté !');
        window.location.href = '/login';
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">Paramètres du compte</h2>

            {/* Profil */}
            <div className="bg-white rounded shadow p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} /> Mon Profil
                </h3>
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <button type="submit" className="bg-wine text-white px-4 py-2 rounded hover:bg-wine/90 transition">
                        Modifier le profil
                    </button>
                </form>
            </div>

            {/* Sécurité */}
            <div className="bg-white rounded shadow p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLock} /> Sécurité
                </h3>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Mot de passe actuel</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Nouveau mot de passe</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                    <button type="submit" className="bg-wine text-white px-4 py-2 rounded hover:bg-wine/90 transition">
                        Modifier le mot de passe
                    </button>
                </form>
            </div>

            {/* Déconnexion */}
            <button
                onClick={handleLogout}
                className="w-full md:w-auto bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 justify-center hover:bg-red-600 transition"
            >
                <FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion
            </button>

            <Toaster />
        </div>
    );
}
