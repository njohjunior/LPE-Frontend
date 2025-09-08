import React, { useState } from "react";
import Lottie from "lottie-react";
import Position from "../Assets/Lotties/position.json";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";

export default function Traquer() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/tracking-result?trackingId=${trackingId}`);
  };

  return (
    <div className="py-20 px-4 md:px-16 arriere">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg border-wine border-t-4 bg-white px-10 py-10 text-center space-y-8">
        <Lottie animationData={Position} className="w-32 mx-auto" />
        <p className="text-gray-700">
          Entrez votre identifiant pour suivre votre livraison en temps réel.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Ex: LPX123456"
            required
            className="w-full md:w-2/3 px-4 py-3 rounded border focus:outline-none focus:ring-2 focus:ring-wine"
          />
          <button
            type="submit"
            className="bg-wine text-white px-6 py-3 rounded font-semibold hover:bg-wine/90 transition"
          >
            Rechercher
          </button>
        </form>
      </div>
    </div>
  );
}
