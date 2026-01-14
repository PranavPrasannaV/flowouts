"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCollectionBySlug, collections } from "@/data/collections";
import ProductCard from "@/components/ProductCard";

export default function CollectionPage() {
    const params = useParams();
    const slug = params.slug as string;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Collection Not Found</h1>
                    <Link href="/collections" className="text-white/60 hover:text-white underline">
                        Back to Collections
                    </Link>
                </div>
            </div>
        );
    }

    // Check if it's a category page (Mens, Womens, Kids) vs a Brand Collection (Rise, Chef, Essentials)
    const isCategoryPage = ["mens", "womens", "kids-and-toddlers"].includes(slug);

    if (isCategoryPage) {
        return (
            <div className="min-h-screen bg-black text-white">
                <Header />
                <main className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                    {/* Simple Category Header */}
                    <div className="mb-12">
                        <Link href="/" className="text-white/40 hover:text-white text-xs uppercase tracking-widest mb-4 inline-block transition-colors">
                            Home / {collection.name}
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-2">
                            {collection.name}
                        </h1>
                        <p className="text-white/60">
                            {collection.products.length} Products
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {collection.products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Color themes for each collection
    const themes: Record<string, { gradient: string; accent: string; glow: string }> = {
        rise: {
            gradient: "from-amber-500/10 via-transparent to-rose-500/10",
            accent: "bg-amber-500",
            glow: "shadow-amber-500/20",
        },
        "the-chef": {
            gradient: "from-emerald-500/10 via-transparent to-cyan-500/10",
            accent: "bg-emerald-500",
            glow: "shadow-emerald-500/20",
        },
        essentials: {
            gradient: "from-violet-500/10 via-transparent to-fuchsia-500/10",
            accent: "bg-violet-500",
            glow: "shadow-violet-500/20",
        },
        "the-basics": {
            gradient: "from-neutral-500/10 via-transparent to-zinc-500/10",
            accent: "bg-neutral-400",
            glow: "shadow-neutral-400/20",
        },
    };

    const theme = themes[slug] || themes.rise;

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main className="pt-24 pb-16">
                {/* Hero Section */}
                <div className={`relative py-16 px-6 md:px-12 bg-gradient-to-br ${theme.gradient}`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:32px_32px]" />
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Back Link */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/collections"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-sm uppercase tracking-widest">All Collections</span>
                            </Link>
                        </motion.div>

                        {/* Collection Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className={`w-12 h-1 ${theme.accent} mb-6`} />
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
                                {collection.name}
                            </h1>
                            <p className="text-white/60 text-lg max-w-xl mb-2">
                                {collection.description}
                            </p>
                            <p className="text-white/40 text-sm">
                                {collection.products.length} Products
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="px-6 md:px-12 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {collection.products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Browse Other Collections */}
                <div className="px-6 md:px-12 py-16 border-t border-white/10">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">
                            Browse Other Collections
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {collections
                                .filter((c) => c.id !== slug)
                                .map((otherCollection) => (
                                    <Link key={otherCollection.id} href={`/collections/${otherCollection.id}`}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
                                        >
                                            {otherCollection.name}
                                        </motion.button>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
