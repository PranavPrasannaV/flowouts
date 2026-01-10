"use client";

import { ParticleTextEffect } from "./ui/particle-text-effect";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white pt-16">
            {/* Abstract Background Gradient */}
            {/* Removed as per instruction */}

            <div className="z-10 text-center px-6 w-full max-w-5xl mx-auto">
                <div className="mb-4">
                    <ParticleTextEffect words={["FLOWOUTS"]} />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-lg mb-10 mx-auto"
                >
                    Minimalist aesthetic. Premium quality. Designed for the modern individual.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.4 }}
                >
                    <Link href="/products" className="group px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-widest uppercase rounded-full hover:scale-105 active:scale-95 transition-all inline-block">
                        Shop Collection
                    </Link>
                </motion.div>
            </div>

            {/* Floating Elements (Optional aesthetic touch) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] w-24 h-24 border border-black/5 dark:border-white/5 rounded-full z-0 hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-2xl z-0 hidden lg:block"
            />
        </section>
    );
}
