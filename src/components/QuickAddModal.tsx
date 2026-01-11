"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface QuickAddModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Navy", hex: "#1E3A5F" },
    { name: "Gray", hex: "#6B7280" },
];

export default function QuickAddModal({ product, isOpen, onClose }: QuickAddModalProps) {
    const { addToCart } = useCart();
    // State to track selections for each option group (e.g., { Size: "M", Color: "Black" })
    const [selections, setSelections] = useState<Record<string, string>>({});
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    // Check if all options have a selection
    const allOptionsSelected = product.options.every(opt => selections[opt.name]);

    const handleAddToCart = () => {
        if (!allOptionsSelected) return;

        // Generate variant name
        const variantSuffix = Object.values(selections).join(" / ");

        // Add product with selected options
        for (let i = 0; i < quantity; i++) {
            addToCart({
                ...product,
                id: `${product.id}-${variantSuffix}`,
                name: `${product.name} - ${variantSuffix}`,
            });
        }

        // Reset and close
        setSelections({});
        setQuantity(1);
        onClose();
    };

    const handleOptionSelect = (optionName: string, value: string) => {
        setSelections(prev => ({
            ...prev,
            [optionName]: value
        }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[201] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg"
                    >
                        <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="flex items-start justify-between p-4 border-b border-white/10">
                                <div className="flex gap-4">
                                    {/* Product Image */}
                                    <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-neutral-800 flex-shrink-0">
                                        <Image
                                            src={product.images?.[0] || ""}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div>
                                        <h3 className="font-semibold text-white text-sm leading-tight mb-1">
                                            {product.name}
                                        </h3>
                                        <p className="text-white/50 text-xs mb-2">{product.category}</p>
                                        <p className="text-white font-bold">{product.price}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors -mr-1 -mt-1"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Options */}
                            <div className="p-4 space-y-5 max-h-[60vh] overflow-y-auto">
                                {product.options.map((option) => (
                                    <div key={option.name}>
                                        <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
                                            {option.name}: <span className="text-white">{selections[option.name] || "Select"}</span>
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {option.values.map((value) => (
                                                <button
                                                    key={value}
                                                    onClick={() => handleOptionSelect(option.name, value)}
                                                    className={`
                                                        px-3 py-2 rounded-lg text-sm font-medium transition-all
                                                        ${selections[option.name] === value
                                                            ? 'bg-white text-black'
                                                            : 'bg-white/10 text-white hover:bg-white/20'
                                                        }
                                                    `}
                                                >
                                                    {value}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Quantity */}
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
                                        Quantity
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <Minus className="w-4 h-4 text-white" />
                                        </button>
                                        <span className="text-lg font-bold text-white w-8 text-center">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <Plus className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <div className="p-4 pt-0">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!allOptionsSelected}
                                    className={`
                                        w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all
                                        ${allOptionsSelected
                                            ? 'bg-white text-black hover:bg-neutral-200'
                                            : 'bg-white/20 text-white/50 cursor-not-allowed'
                                        }
                                    `}
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    {allOptionsSelected ? "Add to Cart" : "Select Options"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
