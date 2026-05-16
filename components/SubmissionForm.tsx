"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type FormData = {
    title: string;
    story: string;
    email?: string;
    consent: boolean;
};

export default function SubmissionForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Submission failed");

            setIsSuccess(true);
            reset();
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="submit-form" className="py-20 bg-black px-4 font-mono relative z-10">
            <div className="max-w-2xl mx-auto border border-gray-800 p-8 bg-black/80 backdrop-blur-sm neon-glow-red">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading text-brand-red mb-4 neon-text-red">
                        SECURE SUBMISSION
                    </h2>
                    <p className="text-gray-400 text-sm">
                        ENCRYPTED CHANNEL. ANONYMOUS ENTRY.
                    </p>
                </div>

                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="border border-brand-red p-8 text-center bg-brand-red/10"
                    >
                        <Check className="w-12 h-12 text-brand-red mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-brand-red mb-2">DATA RECEIVED</h3>
                        <p className="text-gray-400 text-xs">Connection terminated. Identity wiped.</p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 text-brand-yellow hover:text-white transition-colors text-xs border border-brand-yellow px-4 py-2"
                        >
                            [ SUBMIT ANOTHER ]
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-brand-red text-xs mb-2 tracking-widest">&gt; TITLE_</label>
                            <input
                                {...register("title", { required: "Title is required", maxLength: 100 })}
                                placeholder="ENTER CLASSIFICATION..."
                                className="w-full bg-black border border-gray-800 focus:border-brand-red text-white p-3 text-sm outline-none transition-all focus:neon-glow-red"
                            />
                            {errors.title && <span className="text-brand-yellow text-xs mt-1 block">{errors.title.message}</span>}
                        </div>

                        <div>
                            <label className="block text-brand-red text-xs mb-2 tracking-widest">&gt; STATEMENT_</label>
                            <textarea
                                {...register("story", { required: "Story is required", maxLength: 2000 })}
                                placeholder="INPUT CONFESSION DATA..."
                                rows={6}
                                className="w-full bg-black border border-gray-800 focus:border-brand-red text-white p-3 text-sm outline-none transition-all focus:neon-glow-red"
                            />
                            {errors.story && <span className="text-brand-yellow text-xs mt-1 block">{errors.story.message}</span>}
                        </div>

                        <div>
                            <label className="block text-gray-500 text-xs mb-2 tracking-widest">&gt; EMAIL [OPTIONAL]_</label>
                            <input
                                {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid format" } })}
                                placeholder="FOR NOTIFICATION PROTOCOLS..."
                                className="w-full bg-black border border-gray-800 focus:border-brand-red text-gray-300 p-3 text-sm outline-none transition-all"
                            />
                            {errors.email && <span className="text-brand-yellow text-xs mt-1 block">{errors.email.message}</span>}
                        </div>

                        <div className="flex items-start gap-3 border border-gray-800 p-4">
                            <input
                                type="checkbox"
                                {...register("consent", { required: "Verification required" })}
                                className="w-4 h-4 accent-brand-red mt-1"
                            />
                            <label className="text-gray-400 text-xs leading-relaxed">
                                I VERIFY THIS DATA IS FACTUAL AND I AM AUTHORIZED (18+) TO TRANSMIT IT.
                            </label>
                        </div>
                        {errors.consent && <span className="text-brand-yellow text-xs block">{errors.consent.message}</span>}

                        {error && <div className="text-brand-yellow text-center text-xs border border-brand-yellow p-2">{error}</div>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-transparent border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold py-4 text-sm tracking-[0.2em] transition-all disabled:opacity-50 flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "[ TRANSMIT_ ]"}
                            </span>
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
