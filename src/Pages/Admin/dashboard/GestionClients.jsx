import React, { useEffect, useState, useCallback } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function GestionClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken"); // Récupération du token admin

  // ✅ fetchClients stabilisé avec useCallback
  const fetchClients = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/clients", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Erreur lors du chargement des clients");

      const data = await response.json();
      setClients(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, [token]); // dépend seulement du token

  const deleteClient = async (id) => {
    const confirm = window.confirm("Voulez-vous vraiment supprimer ce client ?");
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:8000/api/clients/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Impossible de supprimer le client");

      setClients(clients.filter(client => client.id !== id));
      toast.success("Client supprimé avec succès");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [fetchClients]); // ✅ plus de warning

  if (loading) return <p>Chargement des clients...</p>;

  return (
    <div className="p-4">
      <Toaster />
      <h2 className="text-xl font-bold mb-4">Gestion des Clients</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded">
        <thead>
          <tr className="bg-wine text-white">
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prénom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Téléphone</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id} className="text-center border-t">
              <td className="px-4 py-2">{client.nom}</td>
              <td className="px-4 py-2">{client.prenom}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2">{client.phone}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => deleteClient(client.id)}
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
