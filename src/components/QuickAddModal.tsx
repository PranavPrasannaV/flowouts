"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, ShoppingCart } from "lucide-react";
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
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>("Black");
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    const handleAddToCart = () => {
        if (!selectedSize) {
            // Highlight size selection
            return;
        }

        // Add product with selected options
        for (let i = 0; i < quantity; i++) {
            addToCart({
                ...product,
                id: `${product.id}-${selectedSize}-${selectedColor}`,
                name: `${product.name} - ${selectedSize} / ${selectedColor}`,
            });
        }

        // Reset and close
        setSelectedSize(null);
        setSelectedColor("Black");
        setQuantity(1);
        onClose();
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
                                            src={product.image}
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
                            <div className="p-4 space-y-5">
                                {/* Color Selection */}
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
                                        Color: <span className="text-white">{selectedColor}</span>
                                    </p>
                                    <div className="flex gap-2">
                                        {colors.map((color) => (
                                            <button
                                                key={color.name}
                                                onClick={() => setSelectedColor(color.name)}
                                                className={`
                                                    w-8 h-8 rounded-full border-2 transition-all
                                                    ${selectedColor === color.name
                                                        ? 'border-white scale-110'
                                                        : 'border-transparent hover:border-white/30'
                                                    }
                                                `}
                                                style={{ backgroundColor: color.hex }}
                                                title={color.name}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-widest mb-3">
                                        Size: <span className="text-white">{selectedSize || "Select a size"}</span>
                                    </p>
                                    <div className="grid grid-cols-6 gap-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`
                                                    py-2.5 rounded-lg text-sm font-medium transition-all
                                                    ${selectedSize === size
                                                        ? 'bg-white text-black'
                                                        : 'bg-white/10 text-white hover:bg-white/20'
                                                    }
                                                `}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

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
                                    disabled={!selectedSize}
                                    className={`
                                        w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all
                                        ${selectedSize
                                            ? 'bg-white text-black hover:bg-neutral-200'
                                            : 'bg-white/20 text-white/50 cursor-not-allowed'
                                        }
                                    `}
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    {selectedSize ? "Add to Cart" : "Select a Size"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
