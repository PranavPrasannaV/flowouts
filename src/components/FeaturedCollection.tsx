"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";
import QuickAddModal from "./QuickAddModal";

import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
    const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
            >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                        <button
                            onClick={() => setIsQuickAddOpen(true)}
                            className="w-full py-3 bg-white dark:bg-black text-black dark:text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors rounded"
                        >
                            Quick Add
                        </button>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                    <div>
                        <h3 className="text-sm font-medium tracking-wide uppercase line-clamp-1">{product.name}</h3>
                        <p className="text-xs text-neutral-500 mt-1">{product.category}</p>
                    </div>
                    <span className="text-sm font-semibold">{product.price}</span>
                </div>
            </motion.div>

            {/* Quick Add Modal */}
            <QuickAddModal
                product={product}
                isOpen={isQuickAddOpen}
                onClose={() => setIsQuickAddOpen(false)}
            />
        </>
    );
}

export default function FeaturedCollection() {
    // Use first 4 items from the real products list
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-center md:text-left">Featured<br />Collection</h2>
                <Link href="/products" className="hidden md:block text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4 decoration-1">
                    View All Products
                </Link>
            </div>

            {/* Mobile: horizontal scroll | Desktop: grid */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="min-w-[75vw] sm:min-w-[60vw] md:min-w-0 snap-start">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link href="/products" className="text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1">
                    View All Products
                </Link>
            </div>
        </section>
    );
}
