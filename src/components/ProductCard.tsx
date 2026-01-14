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
                className="group relative touch-manipulation"
            >
                {/* Main clickable card area */}
                <Link
                    href={`/products/${product.id}`}
                    className="block relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm"
                >
                    <Image
                        src={product.images?.[0] || ""}
                        alt={product.name}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />

                    {/* Quick Add Overlay - visible on mobile, hover on desktop */}
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent md:from-transparent translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setIsQuickAddOpen(true);
                            }}
                            className="w-full py-2.5 md:py-3 bg-black text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded"
                        >
                            Quick Add
                        </button>
                    </div>
                </Link>

                {/* Product Info */}
                <Link href={`/products/${product.id}`} className="block mt-3 md:mt-4">
                    <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium tracking-wide uppercase line-clamp-2 md:line-clamp-1">{product.name}</h3>
                            <p className="text-xs text-neutral-500 mt-1">{product.category}</p>
                        </div>
                        <span className="text-sm font-semibold shrink-0">{product.price}</span>
                    </div>
                </Link>
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
