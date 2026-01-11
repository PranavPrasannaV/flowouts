"use client";

import { useState } from "react";
import { Product, ProductOption } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const { addToCart, toggleCart } = useCart();

    // Initialize selected options (default to first value of each option)
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
        const initial: Record<string, string> = {};
        product.options?.forEach(opt => {
            if (opt.values.length > 0) {
                initial[opt.name] = opt.values[0];
            }
        });
        return initial;
    });

    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const handleOptionSelect = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: value
        }));
    };

    const handleAddToCart = async () => {
        setIsAdding(true);

        // Construct variant name (e.g., "Size: M, Color: Black")
        const variantName = Object.entries(selectedOptions)
            .map(([key, val]) => `${key}: ${val}`)
            .join(", ");

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            color: selectedOptions["Color"] || undefined,
            size: selectedOptions["Size"] || undefined,
        };

        addToCart(cartItem);

        // Small delay for animation
        setTimeout(() => {
            setIsAdding(false);
            toggleCart(); // Open cart drawer
        }, 600);
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase">
                    {product.name}
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400 font-medium">
                    {product.price}
                </p>
            </div>

            {/* Separator */}
            <div className="h-px bg-white/10" />

            {/* Options */}
            <div className="space-y-6">
                {product.options?.map((option) => (
                    <div key={option.name}>
                        <div className="flex justify-between mb-3">
                            <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
                                {option.name}
                            </span>
                            <span className="text-sm text-white">
                                {selectedOptions[option.name]}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {option.values.map((value) => {
                                const isSelected = selectedOptions[option.name] === value;
                                return (
                                    <button
                                        key={value}
                                        onClick={() => handleOptionSelect(option.name, value)}
                                        className={cn(
                                            "min-w-[3rem] px-4 py-2 border rounded-full text-sm font-medium transition-all duration-200",
                                            isSelected
                                                ? "bg-white text-black border-white shadow-lg shadow-white/10 scale-105"
                                                : "bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white"
                                        )}
                                    >
                                        {value}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Quantity */}
                <div>
                    <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-3 block">
                        Quantity
                    </span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border border-neutral-800 rounded-full bg-white/5">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-3 hover:text-white text-neutral-400 transition-colors"
                                disabled={quantity <= 1}
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-3 hover:text-white text-neutral-400 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2 group mt-4 relative overflow-hidden"
            >
                <div className={cn(
                    "absolute inset-0 bg-emerald-500 transition-transform duration-500 ease-out origin-left",
                    isAdding ? "scale-x-100" : "scale-x-0"
                )} />
                <span className="relative z-10 flex items-center gap-2">
                    {isAdding ? "Added to Bag" : "Add to Bag"}
                    {!isAdding && <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />}
                </span>
            </button>

            {/* Description */}
            <div className="mt-8 prose prose-invert prose-sm max-w-none text-neutral-400">
                <style jsx global>{`
                    .prose p { margin-bottom: 1em; }
                    .prose ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em; }
                    .prose li { margin-bottom: 0.5em; }
                    .prose strong { color: white; font-weight: 600; }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
        </div>
    );
}
