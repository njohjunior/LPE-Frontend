import React, { useEffect, useState, useCallback } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function GestionCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("adminToken"); // Récupération du token

    // ✅ fetchCourses stabilisé avec useCallback
    const fetchCourses = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:8000/api/courses", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Erreur lors du chargement des courses");

            const data = await response.json();
            setCourses(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }, [token]); // dépend seulement du token

    const deleteCourse = async (id) => {
        const confirm = window.confirm("Voulez-vous vraiment supprimer cette course ?");
        if (!confirm) return;

        try {
            const response = await fetch(`http://localhost:8000/api/courses/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Impossible de supprimer la course");

            setCourses(courses.filter(course => course.id !== id));
            toast.success("Course supprimée avec succès");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const updateStatus = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:8000/api/courses/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) throw new Error("Impossible de mettre à jour le statut");

            setCourses(courses.map(c => c.id === id ? { ...c, status: newStatus } : c));
            toast.success("Statut mis à jour");
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]); // ✅ plus de warning

    if (loading) return <p>Chargement des courses...</p>;

    return (
        <div className="p-4">
            <Toaster />
            <h2 className="text-xl font-bold mb-4">Gestion des Courses</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded">
                <thead>
                    <tr className="bg-wine text-white">
                        <th className="px-4 py-2">Titre</th>
                        <th className="px-4 py-2">Client</th>
                        <th className="px-4 py-2">Détails</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id} className="text-center border-t">
                            <td className="px-4 py-2">{course.titre}</td>
                            <td className="px-4 py-2">{course.client_id}</td>
                            <td className="px-4 py-2">{course.description}</td>
                            <td className="px-4 py-2">{course.status}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button
                                    onClick={() => updateStatus(course.id, "terminée")}
                                    className="bg-green-500 text-white px-2 py-1 rounded"
                                >
                                    Terminée
                                </button>
                                <br />
                                <button
                                    onClick={() => deleteCourse(course.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
