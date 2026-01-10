"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function Header() {
    const { toggleCart, cart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5"
            >
                <div className="flex items-center gap-4">
                    {/* Mobile Menu (Hidden on Desktop) */}
                    <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Flowouts Logo"
                            width={56}
                            height={56}
                            className="dark:invert"
                            priority
                        />
                        <span className="text-xl font-bold tracking-tighter uppercase hidden sm:block">Flowouts</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <Link href="/products" className="hover:opacity-60 transition-opacity">
                        Shop
                    </Link>
                    <Link href="/products" className="hover:opacity-60 transition-opacity">
                        Collections
                    </Link>
                    <Link href="/about" className="hover:opacity-60 transition-opacity">
                        About
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 hover:bg-black/5 rounded-full transition-colors"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        onClick={toggleCart}
                        className="relative p-2 hover:bg-black/5 rounded-full transition-colors"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cart.length > 0 && (
                            <span className="absolute top-1 right-1 w-2 h-2 bg-black dark:bg-white rounded-full p-[2px]" />
                        )}
                    </button>
                    <Link href="/api/auth/signin" className="p-2 hover:bg-black/5 rounded-full transition-colors text-sm font-bold uppercase tracking-widest hidden md:block">
                        Login
                    </Link>
                </div>
            </motion.header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
