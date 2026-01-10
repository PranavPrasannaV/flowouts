"use client";

import { ParticleTextEffect } from "./ui/particle-text-effect";
import BlurTextAnimation from "./ui/blur-text-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black text-black dark:text-white pt-16">
            {/* Abstract Background Gradient */}
            {/* Removed as per instruction */}

            <div className="z-10 text-center px-6 w-full max-w-5xl mx-auto">
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ParticleTextEffect words={["FLOW"]} />
                </motion.div>

                {/* Subtitle appears after particle animation settles (~2.5s) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 2.5 }}
                >
                    <BlurTextAnimation
                        text="Minimalist aesthetic. Premium quality. Designed for the modern individual."
                        className="max-w-lg mb-10 mx-auto"
                        fontSize="text-lg md:text-xl"
                        textColor="text-neutral-600 dark:text-neutral-400"
                        loop={false}
                    />
                </motion.div>

                {/* Button appears after subtitle (~3.5s) */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 3.5
                    }}
                >
                    <Link href="/products" className="group px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-widest uppercase rounded-full hover:scale-105 active:scale-95 transition-all inline-block">
                        Shop Collection
                    </Link>
                </motion.div>
            </div>

            {/* Floating Elements - appear after main content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -20, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 4 },
                    scale: { duration: 1, delay: 4 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 }
                }}
                className="absolute top-1/4 right-[10%] w-24 h-24 border border-black/5 dark:border-white/5 rounded-full z-0 hidden lg:block"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, 20, 0]
                }}
                transition={{
                    opacity: { duration: 1, delay: 4.2 },
                    scale: { duration: 1, delay: 4.2 },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4.2 }
                }}
                className="absolute bottom-1/4 left-[10%] w-32 h-32 bg-black/5 dark:bg-white/5 rounded-full blur-2xl z-0 hidden lg:block"
            />
        </section>
    );
}

