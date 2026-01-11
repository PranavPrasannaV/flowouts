"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Search as SearchIcon } from "lucide-react";
import { products, Product } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<Product[]>([]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setResults([]);
        } else {
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setResults(filtered.slice(0, 5)); // Limit to 5 results
        }
    }, [searchTerm]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col pt-24 px-6 md:px-0 items-center"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="w-full max-w-2xl relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-6 h-6" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                        className="w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-800 py-4 pl-14 pr-4 text-2xl font-bold outline-none placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
                    />
                </div>

                <div className="w-full max-w-2xl mt-8">
                    {results.length > 0 && (
                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Products</p>
                            {results.map(product => (
                                <Link
                                    key={product.id}
                                    href={`/products`} // In real app, /products/${product.id}
                                    onClick={onClose}
                                    className="flex items-center gap-4 group p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                                >
                                    <div className="relative w-12 h-16 bg-neutral-200 rounded-sm overflow-hidden">
                                        <Image src={product.images?.[0] || ""} alt={product.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold group-hover:underline">{product.name}</h4>
                                        <p className="text-sm text-neutral-500">{product.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    {searchTerm && results.length === 0 && (
                        <p className="text-center text-neutral-500 mt-8">No results found for "{searchTerm}"</p>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
