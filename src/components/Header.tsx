"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import SearchModal from "./SearchModal";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
    animationDelay?: number;
}

const collectionsDropdown = [
    { href: "/collections/rise", label: "Rise" },
    { href: "/collections/the-chef", label: "The Chef" },
    { href: "/collections/essentials", label: "Essentials: Within Reach" },
];

export default function Header({ animationDelay = 0 }: HeaderProps) {
    const { toggleCart, cart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: animationDelay }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5"
            >
                <div className="flex items-center gap-4">
                    {/* Mobile Menu (Hidden on Desktop) */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Logo - No text on desktop */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Flow Logo"
                            width={56}
                            height={56}
                            className="dark:invert"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <Link href="/products" className="hover:opacity-60 transition-opacity">
                        Shop
                    </Link>

                    {/* Collections with Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsCollectionsOpen(true)}
                        onMouseLeave={() => setIsCollectionsOpen(false)}
                    >
                        <Link
                            href="/collections"
                            className="flex items-center gap-1 hover:opacity-60 transition-opacity"
                        >
                            Collections
                            <ChevronDown className={`w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`} />
                        </Link>

                        <AnimatePresence>
                            {isCollectionsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-56 py-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
                                >
                                    {collectionsDropdown.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                        About
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="relative p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </button>
                    <Link href="/auth/signin" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-sm font-bold uppercase tracking-widest hidden md:block">
                        Login
                    </Link>
                </div>
            </motion.header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
