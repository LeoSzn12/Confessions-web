"use client";

import { motion } from "framer-motion";

const VIDEOS = [
    "dQw4w9WgXcQ", // Placeholder 1
    "dQw4w9WgXcQ", // Placeholder 2
    "dQw4w9WgXcQ", // Placeholder 3
];

export default function VideoGrid() {
    return (
        <section className="py-20 bg-brand-dark px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-heading text-white mb-12 text-center">
                    LATEST CONFESSIONS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VIDEOS.map((id, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02, borderColor: "#CC0000" }}
                            className="aspect-[9/16] bg-black border-2 border-transparent rounded-lg overflow-hidden shadow-2xl relative group"
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${id}?controls=0&rel=0`}
                                title="Confession Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
