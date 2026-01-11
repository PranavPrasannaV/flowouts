"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import QuickAddModal from "./QuickAddModal";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
    const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
            >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm">
                    {/* Link to PDP */}
                    <Link href={`/products/${product.id}`} className="block w-full h-full relative">
                        {/* Fallback to empty string if images array is empty (shouldn't happen with valid data) */}
                        <Image
                            src={product.images?.[0] || ""}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </Link>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 pointer-events-none">
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent navigation if clicking quick add
                                e.preventDefault();
                                setIsQuickAddOpen(true);
                            }}
                            className="w-full py-3 bg-white dark:bg-black text-black dark:text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors rounded pointer-events-auto"
                        >
                            Quick Add
                        </button>
                    </div>
                </div>

                <div className="mt-4 flex justify-between items-start">
                    <Link href={`/products/${product.id}`} className="block flex-1">
                        <h3 className="text-sm font-medium tracking-wide uppercase line-clamp-1 hover:underline">{product.name}</h3>
                        <p className="text-xs text-neutral-500 mt-1">{product.category}</p>
                    </Link>
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
