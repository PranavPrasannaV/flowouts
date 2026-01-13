"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";

const collectionCards = [
    {
        id: "rise",
        name: "Rise",
        tagline: "Elevate Your Style",
        gradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
        textColor: "text-amber-100",
        accentColor: "bg-amber-500",
        hoverGlow: "hover:shadow-amber-500/30",
    },
    {
        id: "the-chef",
        name: "The Chef",
        tagline: "Cook Up Your Look",
        gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
        textColor: "text-emerald-100",
        accentColor: "bg-emerald-500",
        hoverGlow: "hover:shadow-emerald-500/30",
    },
    {
        id: "the-basics",
        name: "The Basics",
        tagline: "Essential Comfort",
        gradient: "from-slate-400/20 via-gray-500/10 to-zinc-500/20",
        textColor: "text-slate-100",
        accentColor: "bg-slate-400",
        hoverGlow: "hover:shadow-slate-400/30",
    },
    {
        id: "essentials",
        name: "Essentials: Within Reach",
        tagline: "Premium Basics, Accessible Style",
        gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
        textColor: "text-violet-100",
        accentColor: "bg-violet-500",
        hoverGlow: "hover:shadow-violet-500/30",
    },
];

export default function CollectionsPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main className="pt-32 pb-24 px-6 md:px-12">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-4">
                        Collections
                    </h1>
                    <p className="text-white/50 text-lg max-w-md mx-auto">
                        Explore our curated collections, each with its own unique story and style.
                    </p>
                </motion.div>

                {/* Collection Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {collectionCards.map((card, index) => {
                        const collection = collections.find((c) => c.id === card.id);
                        const productCount = collection?.products.length || 0;

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            >
                                <Link href={`/collections/${card.id}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            relative group cursor-pointer
                                            aspect-[3/4] rounded-2xl overflow-hidden
                                            bg-gradient-to-br ${card.gradient}
                                            border border-white/10
                                            shadow-2xl ${card.hoverGlow}
                                            transition-all duration-500
                                        `}
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-30">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
                                        </div>

                                        {/* Glow Effect */}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-transparent to-white/5`} />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                                            {/* Accent Line */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "3rem" }}
                                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                                className={`h-0.5 ${card.accentColor} mb-4`}
                                            />

                                            {/* Collection Name */}
                                            <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-2 ${card.textColor}`}>
                                                {card.name}
                                            </h2>

                                            {/* Tagline */}
                                            <p className="text-white/60 text-sm mb-4">
                                                {card.tagline}
                                            </p>

                                            {/* Product Count */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-white/40 uppercase tracking-widest">
                                                    {productCount} Products
                                                </span>

                                                {/* Arrow */}
                                                <motion.div
                                                    initial={{ x: 0 }}
                                                    whileHover={{ x: 5 }}
                                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Hover Border Effect */}
                                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-20"
                >
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-white/30 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
