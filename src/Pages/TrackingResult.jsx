import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "../Styles/login.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoibGVwb2ludCIsImEiOiJjbTAzbmlpYzMwM3lqMmpwdnh3aG9tdGxnIn0.V5Hk5KfFE33p_0qdEPqLuA";

export default function TrackingResult() {
  const query = new URLSearchParams(useLocation().search);
  const trackingId = query.get("trackingId");
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!trackingId) return;

    fetch(`http://localhost:8000/api/courses/${trackingId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Course introuvable");
        return res.json();
      })
      .then((data) => setCourse(data))
      .catch((err) => setError(err.message));
  }, [trackingId]);

  useEffect(() => {
    if (!course || !mapContainerRef.current) return;

    // Cast en Number pour éviter les bugs
    const ramassage = [
      Number(course.longitudeRamassage),
      Number(course.latitudeRamassage),
    ];
    const livraison = [
      Number(course.longitudeLivraison),
      Number(course.latitudeLivraison),
    ];

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: ramassage,
      zoom: 12,
    });

    mapRef.current.on("load", async () => {
      // Markers
      new mapboxgl.Marker({ color: "green" })
        .setLngLat(ramassage)
        .setPopup(new mapboxgl.Popup().setText("Adresse de ramassage"))
        .addTo(mapRef.current);

      new mapboxgl.Marker({ color: "red" })
        .setLngLat(livraison)
        .setPopup(new mapboxgl.Popup().setText("Adresse de livraison"))
        .addTo(mapRef.current);

      // Route
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${ramassage[0]},${ramassage[1]};${livraison[0]},${livraison[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        const route = data.routes[0].geometry;

        mapRef.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: route,
          },
        });

        mapRef.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: { "line-join": "round", "line-cap": "round" },
          paint: { "line-color": "#7B1F2B", "line-width": 6 },
        });

        // Fit bounds sur les deux points
        const bounds = new mapboxgl.LngLatBounds();
        bounds.extend(ramassage);
        bounds.extend(livraison);
        mapRef.current.fitBounds(bounds, { padding: 50 });
      } catch (err) {
        console.error("Erreur lors du calcul de la route :", err);
      }
    });

    return () => mapRef.current.remove();
  }, [course]);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })} à ${date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  if (!trackingId) return <p>ID de suivi manquant.</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>Chargement de la course...</p>;

  return (
    <div className="py-10 px-4 md:px-16 arriere">
      <h2 className="text-2xl text-wine font-bold uppercase mb-8">
        Suivi de la livraison : {trackingId}
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="w-full md:w-3/4 h-[500px] rounded-xl"
          ref={mapContainerRef}
        ></div>

        <div className="w-full md:w-1/4 bg-wine text-white p-4 rounded-xl shadow space-y-3">
          <h3 className="font-bold uppercase text-lg">{course.titre}</h3>
          <p>
            <strong>Type de course :</strong> {course.typeDeCourse}
          </p>
          <p>
            <strong>Adresse ramassage :</strong> {course.adresseRamassage}
          </p>
          <p>
            <strong>Adresse livraison :</strong> {course.adresseLivraison}
          </p>
          <p>
            <strong>Status :</strong>{" "}
            <span
              className={`px-2 py-1 rounded ${
                course.statut?.toLowerCase() === "disponible"
                  ? "bg-blue-500 text-white"
                  : course.statut?.toLowerCase() === "acceptée"
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {course.status}
            </span>
          </p>
          <p>
            <strong>Créée le :</strong> {formatDateTime(course.created_at)}
          </p>
        </div>
      </div>
    </div>
  );
}
