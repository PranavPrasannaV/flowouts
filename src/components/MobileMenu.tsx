"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, User, Info, Grid3X3, Shirt } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { href: "/products", label: "Shop", icon: ShoppingBag },
];

const categoryItems = [
    { href: "/collections/mens", label: "Men" },
    { href: "/collections/womens", label: "Women" },
    { href: "/collections/kids-and-toddlers", label: "Kids & Toddlers" },
];

const collectionItems = [
    { href: "/collections/rise", label: "Rise" },
    { href: "/collections/the-chef", label: "The Chef" },
    { href: "/collections/essentials", label: "Essentials" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 bottom-0 z-[101] w-[85%] max-w-sm bg-black border-r border-white/10 md:hidden overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <span className="text-xl font-bold tracking-tighter uppercase text-white">
                                Flow
                            </span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Main Navigation Links */}
                        <nav className="flex flex-col p-6 space-y-2">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-white/5 transition-colors group"
                                    >
                                        <item.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                        <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Divider */}
                        <div className="mx-6 border-t border-white/10" />

                        {/* Categories Section */}
                        <div className="p-6">
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Categories</p>
                            <div className="space-y-1">
                                {categoryItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors group"
                                        >
                                            <Shirt className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                                            <span className="text-base text-white/70 group-hover:text-white transition-colors">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mx-6 border-t border-white/10" />

                        {/* Collections Section */}
                        <div className="p-6">
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">Collections</p>
                            <div className="space-y-1">
                                {collectionItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-white/5 transition-colors group"
                                        >
                                            <Grid3X3 className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                                            <span className="text-base text-white/70 group-hover:text-white transition-colors">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mx-6 border-t border-white/10" />

                        {/* About Link */}
                        <div className="p-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.45 }}
                            >
                                <Link
                                    href="/about"
                                    onClick={onClose}
                                    className="flex items-center gap-4 py-4 px-4 rounded-xl hover:bg-white/5 transition-colors group"
                                >
                                    <Info className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                    <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                        About
                                    </span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Login Button */}
                        <div className="px-6 pb-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href="/auth/signin"
                                    onClick={onClose}
                                    className="flex items-center gap-4 py-4 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                                >
                                    <User className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                    <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                        Login
                                    </span>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Footer Branding */}
                        <div className="p-6 border-t border-white/10 mt-auto">
                            <p className="text-xs text-white/40 text-center tracking-widest uppercase">
                                © 2026 Flow. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
