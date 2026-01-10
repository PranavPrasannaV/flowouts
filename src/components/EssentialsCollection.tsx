"use client";

import { motion } from "framer-motion";
import { essentialsCollection } from "@/data/products";
import { ProductCard } from "@/components/FeaturedCollection";
import Link from "next/link";

export default function EssentialsCollection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-900/20">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-center md:text-left"
                >
                    The Essentials<br />Collection
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:block text-neutral-500 max-w-xs text-right"
                >
                    Timeless pieces designed for everyday comfort and style.
                </motion.p>
            </div>

            {/* Mobile: horizontal scroll | Desktop: grid */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {essentialsCollection.slice(0, 4).map((product) => (
                    <div key={product.id} className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-start">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <Link href="/products">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-black dark:border-white text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                        Shop All Essentials
                    </motion.button>
                </Link>
            </div>
        </section>
    );
}
