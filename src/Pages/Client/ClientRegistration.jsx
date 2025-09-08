import React, { useState } from "react";
import "../../Styles/login.css";
import { toast, Toaster } from "react-hot-toast";

export default function ClientRegistration() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validation simple côté frontend
    const newErrors = {};
    if (formData.nom.length < 3) newErrors.nom = "Nom trop court";
    if (formData.prenom.length < 3) newErrors.prenom = "Prénom trop court";
    if (!formData.email.includes("@")) newErrors.email = "Email invalide";
    if (formData.password.length < 6) newErrors.password = "Mot de passe trop court";
    if (formData.password !== formData.password_confirmation)
      newErrors.password_confirmation = "Les mots de passe ne correspondent pas";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const loadingToast = toast.loading("Création du compte...");

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur serveur");
      }

      toast.success("Compte créé avec succès !", { id: loadingToast });
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      toast.error(error.message, { id: loadingToast });
    }
  };

  return (
    <div className="min-h-screen bg-white-smoke py-10 px-6 md:px-20 arriere">
      <div className="max-w-4xl mx-auto bg-wine rounded-xl shadow-md p-8 md:p-12 space-y-10 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">Créer un compte client</h1>
          <p className="text-gray-200">
            Inscrivez-vous pour suivre vos colis, commander facilement et profiter de nos services en ligne.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
              />
              {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
            </div>
            <div>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
              />
              {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Confirmer le mot de passe"
                value={formData.password_confirmation}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-wine"
              />
              {errors.password_confirmation && <p className="text-red-500 text-sm">{errors.password_confirmation}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="bg-white text-wine font-semibold px-6 py-3 rounded hover:bg-gray-200"
          >
            Créer un compte
          </button>
        </form>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
