import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { toast, Toaster } from "react-hot-toast";

import Phone from '../Assets/Lotties/phone.json';
import Email from '../Assets/Lotties/Email.json';
import Position from '../Assets/Lotties/position.json';

import '../Styles/login.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.length < 4) {
      newErrors.name = "Le nom doit comporter au moins 4 caractères";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Veuillez entrer une adresse email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Adresse email invalide";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Veuillez entrer un numéro de téléphone";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Veuillez entrer un message";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const loadingToast = toast.loading("Envoi du message...");

    fetch("http://localhost:8000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Erreur serveur");
          });
        }
        return response.json();
      })
      .then(() => {
        toast.success("Message envoyé avec succès", { id: loadingToast });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        toast.error(error.message || "Échec de l'envoi", { id: loadingToast });
      });
  };

  return (
    <div className="flex justify-center bg-white py-10 arriere">
      {/* Section contact infos */}
      <div className="bg-white-smoke flex-row justify-center items-center py-10 px-10 text-center">
        <h2 className="text-2xl font-bold mb-16 text-center uppercase text-wine">Nos Contacts</h2>
        <div className="flex justify-center items-center space-x-3">
          <Lottie animationData={Phone} className='w-20' />
          <div className='flex-col justify-start'>
            <h3 className="text-xl font-semibold">Téléphone</h3>
            <p className="text-gray-600">+237 6 XX XX XX XX</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-3 py-10">
          <Lottie animationData={Email} className='w-20' />
          <div className='flex-col justify-start'>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">contact@xxxxxxxx.cm</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <Lottie animationData={Position} className='w-20' />
          <div className='flex-col justify-start'>
            <h3 className="text-xl font-semibold">Siège social</h3>
            <p className="text-gray-600">Yaoundé, Cameroun</p>
          </div>
        </div>
      </div>

      {/* Section formulaire */}
      <div className="bg-wine py-10 px-10 ">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase text-white">Envoyez-nous un message</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="w-full">
              <input
                name="name"
                type="text"
                value={formData.name}
                placeholder="Nom et prénom"
                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="w-full">
              <input
                name="email"
                type="email"
                value={formData.email}
                placeholder="Adresse e-mail"
                className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div className='w-full'>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              placeholder="Numéro de téléphone"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="w-full">
            <textarea
              name="message"
              value={formData.message}
              placeholder="Votre message"
              rows="5"
              className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-wine"
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-white text-wine font-semibold px-6 py-3 rounded hover:bg-gray-200"
          >
            Envoyer
          </button>
        </form>
        <Toaster position="top-center" />
      </div>
    </div>
  );
}
