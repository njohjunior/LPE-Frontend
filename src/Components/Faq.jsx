import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            q: "Comment suivre mon colis ?",
            a: "Saisissez simplement votre numéro de suivi dans la barre prévue sur la page d’accueil et accédez aux informations en temps réel.",
        },
        {
            q: "Quels sont vos délais de livraison ?",
            a: "Nous assurons des livraisons express en moins de 24h dans les grandes villes et entre 24-48h pour les zones plus éloignées.",
        },
        {
            q: "Puis-je stocker mes colis chez vous ?",
            a: "Oui, nous disposons d’entrepôts sécurisés pour vos marchandises, accessibles sur demande.",
        },
        {
            q: "Comment devenir partenaire livreur ?",
            a: "Rendez-vous sur notre page de contact et envoyez-nous votre candidature. Notre équipe vous recontactera rapidement.",
        },
    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-20 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center text-wine mb-12">
                Foire Aux Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {questions.map((item, i) => (
                    <div
                        key={i}
                        className="border rounded-lg shadow-sm overflow-hidden"
                    >
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50"
                        >
                            {item.q}
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${activeIndex === i ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <AnimatePresence>
                            {activeIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 pb-4 text-gray-600"
                                >
                                    {item.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
