import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

export default function Accueil() {
    const [stats, setStats] = useState({
        courses: [],
        clients: 0,
        livreurs: 0
    });

    useEffect(() => {
        // Ici tu peux remplacer par tes appels API pour récupérer les données
        setStats({
            courses: [
                { name: 'Disponible', value: 12 },
                { name: 'En cours', value: 8 },
                { name: 'Livrée', value: 15 }
            ],
            clients: 25,
            livreurs: 10
        });
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Graphique des courses par statut */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Courses par statut</h2>
                    <PieChart width={500} height={200}>
                        <Pie
                            data={stats.courses}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {stats.courses.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>

                {/* Statistiques clients et livreurs */}
                <div className="bg-white p-6 rounded shadow space-y-6">
                    <div className="bg-blue-100 p-4 rounded text-center">
                        <h3 className="text-lg font-bold">Clients</h3>
                        <p className="text-2xl font-semibold">{stats.clients}</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded text-center">
                        <h3 className="text-lg font-bold">Livreurs</h3>
                        <p className="text-2xl font-semibold">{stats.livreurs}</p>
                    </div>
                </div>
            </div>

            {/* Graphique barres courses */}
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Courses par type</h2>
                <BarChart
                    width={600}
                    height={300}
                    data={stats.courses}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#FF8042" />
                </BarChart>
            </div>
        </div>
    );
}
