"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";
// ProductCard is now imported
import ProductCard from "./ProductCard";

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
