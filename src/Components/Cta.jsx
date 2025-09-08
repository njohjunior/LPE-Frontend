
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="bg-gradient-to-r from-wine to-black text-white py-20 px-6 md:px-16 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6"
            >
                Prêt à simplifier vos livraisons ?
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
            >
                Rejoignez <span className="font-bold">Le Point Express</span> dès
                aujourd’hui et bénéficiez d’un service rapide, fiable et sécurisé.
            </motion.p>
            <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-white text-wine font-semibold px-8 py-4 rounded-lg shadow-lg transition"
            >
                Nous contacter
            </motion.a>
        </section>
    );
}