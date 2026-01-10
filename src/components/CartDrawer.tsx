"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
    const { cart, removeFromCart, isCartOpen, toggleCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
                            <h2 className="text-xl font-bold uppercase tracking-tight">Your Cart</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500">
                                    <p>Your cart is empty.</p>
                                    <button onClick={toggleCart} className="mt-4 text-sm font-bold uppercase underline">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-20 h-24 bg-neutral-100 dark:bg-neutral-800 rounded-sm overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold line-clamp-1">{item.name}</h3>
                                                <p className="text-sm text-neutral-500">{item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 border border-neutral-200 dark:border-neutral-700 rounded-full px-2 py-1">
                                                    <span className="text-xs font-mono w-4 text-center">{item.quantity}</span>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-neutral-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                                <div className="flex justify-between items-center mb-4 text-lg font-bold">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
