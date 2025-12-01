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
        <section id="submit-form" className="py-20 bg-black px-4">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-heading text-brand-red mb-4">
                        SHARE YOUR CONFESSION
                    </h2>
                    <p className="text-white text-lg font-light">
                        Your story stays anonymous. Your truth deserves to be heard.
                    </p>
                </div>

                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-brand-dark border border-brand-red p-8 text-center rounded-lg"
                    >
                        <Check className="w-16 h-16 text-brand-red mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">CONFESSION RECEIVED</h3>
                        <p className="text-gray-400">Thank you for sharing your truth. Stay anonymous.</p>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="mt-6 text-brand-yellow hover:underline text-sm"
                        >
                            Submit another
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-bold">TITLE</label>
                            <input
                                {...register("title", { required: "Title is required", maxLength: 100 })}
                                placeholder="What's weighing on you?"
                                className="w-full bg-brand-dark border border-gray-800 focus:border-brand-red text-white p-4 rounded-none outline-none transition-colors"
                            />
                            {errors.title && <span className="text-brand-red text-xs">{errors.title.message}</span>}
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-bold">YOUR STORY</label>
                            <textarea
                                {...register("story", { required: "Story is required", maxLength: 2000 })}
                                placeholder="Tell us everything... it's anonymous."
                                rows={6}
                                className="w-full bg-brand-dark border border-gray-800 focus:border-brand-red text-white p-4 rounded-none outline-none transition-colors"
                            />
                            {errors.story && <span className="text-brand-red text-xs">{errors.story.message}</span>}
                        </div>

                        <div>
                            <label className="block text-gray-400 text-sm mb-2 font-bold">EMAIL (OPTIONAL)</label>
                            <input
                                {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                                placeholder="Get notified if we feature your story"
                                className="w-full bg-brand-dark border border-gray-800 focus:border-brand-red text-white p-4 rounded-none outline-none transition-colors"
                            />
                            {errors.email && <span className="text-brand-red text-xs">{errors.email.message}</span>}
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                {...register("consent", { required: "You must confirm this" })}
                                className="w-5 h-5 accent-brand-red bg-brand-dark border-gray-800"
                            />
                            <label className="text-gray-400 text-sm">
                                I confirm this story is true and I'm over 18
                            </label>
                        </div>
                        {errors.consent && <span className="text-brand-red text-xs block">{errors.consent.message}</span>}

                        {error && <div className="text-brand-red text-center text-sm">{error}</div>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brand-red text-white font-bold py-4 text-lg tracking-wider hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : "SUBMIT CONFESSION"}
                        </button>

                        <p className="text-center text-xs text-gray-600 mt-4">
                            All submissions are 100% anonymous. We never share personal info.
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
}
