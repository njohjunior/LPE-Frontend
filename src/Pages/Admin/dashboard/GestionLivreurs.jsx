import React, { useState, useEffect } from 'react';

export default function GestionLivreurs() {
    const [livreurs, setLivreurs] = useState([]);

    const fetchLivreurs = () => {
        fetch('http://localhost:8000/api/livreurs')
            .then(res => res.json())
            .then(data => setLivreurs(data));
    };

    useEffect(() => {
        fetchLivreurs();
    }, []);

    const deleteLivreur = (id) => {
        fetch(`http://localhost:8000/api/livreurs/${id}`, { method: 'DELETE' })
            .then(() => fetchLivreurs());
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Gestion des livreurs</h1>
            <table className="w-full table-auto border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Nom</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {livreurs.map(l => (
                        <tr key={l.id}>
                            <td className="border px-4 py-2">{l.name}</td>
                            <td className="border px-4 py-2">{l.email}</td>
                            <td className="border px-4 py-2">
                                <button onClick={() => deleteLivreur(l.id)} className="px-2 py-1 bg-red-500 text-white rounded">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
