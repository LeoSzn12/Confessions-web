"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const scrollToForm = () => {
        document.getElementById("submit-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Background Texture - CSS Gradient Fallback */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black pointer-events-none"></div>

            {/* Content */}
            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-heading font-bold text-brand-red tracking-tighter mb-4"
                >
                    CONFESSIONS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white font-light tracking-widest mb-2"
                >
                    ANONYMOUS. RAW. REAL.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-gray-400 text-sm md:text-base mb-12"
                >
                    Watch and share true stories from real people
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    onClick={scrollToForm}
                    className="bg-brand-red text-white font-bold py-4 px-8 rounded-none text-lg tracking-wider hover:bg-red-700 transition-colors"
                >
                    SUBMIT YOUR CONFESSION
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 text-gray-500 text-xs tracking-widest animate-bounce"
            >
                SCROLL TO WATCH
            </motion.div>
        </section>
    );
}
