"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products"; // Import from data file
import Link from "next/link"; // Import Link

// Export Product interface so it can be used if needed, or import it
// Ideally keep it consistent. Since we import data, we can infer type or import type.
import { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
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
                        onClick={() => addToCart(product)}
                        className="w-full py-3 bg-white dark:bg-black text-black dark:text-white text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
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
    );
}

export default function FeaturedCollection() {
    // Use first 4 items from the real products list
    const featuredProducts = products.slice(0, 4);

    return (
        <section className="py-24 px-6 md:px-12 bg-background">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">Featured<br />Collection</h2>
                <Link href="/products" className="hidden md:block text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4 decoration-1">
                    View All Products
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
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
