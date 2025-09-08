import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import "../../Styles/login.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loadingToast = toast.loading("Connexion en cours...");

        try {
            const response = await fetch('http://localhost:8000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Identifiants invalides');
            }

            const data = await response.json();

            // Stockage du token dans le localStorage
            localStorage.setItem('adminToken', data.token);
            localStorage.setItem('adminInfo', JSON.stringify(data.admin));

            toast.success('Connexion réussie !', { id: loadingToast });

            // Redirection vers le dashboard
            navigate('/dashboard');

        } catch (error) {
            toast.error(error.message || 'Erreur de connexion', { id: loadingToast });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 arriere">
            <Toaster position="top-center" />
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-wine mb-6">Connexion Admin</h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1 font-medium text-gray-700">Mot de passe</label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-wine text-white font-semibold py-3 rounded hover:bg-wine/90 transition"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
}
