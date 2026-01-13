"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import SearchModal from "./SearchModal";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
    animationDelay?: number;
}

// Exact bag icon from flowouts.com
function BagIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 40 40"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33L28.4 11.8zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1-9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
            />
        </svg>
    );
}

const collectionsDropdown = [
    { href: "/collections/rise", label: "Rise" },
    { href: "/collections/the-chef", label: "The Chef" },
    { href: "/collections/essentials", label: "Essentials" },
    { href: "/collections/the-basics", label: "The Basics" },
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
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5"
            >
                {/* Mobile Layout - 3 column grid for centering */}
                <div className="flex md:hidden items-center justify-between">
                    {/* Left - Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Center - Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                        <Image
                            src="/logo.png"
                            alt="Flow Logo"
                            width={48}
                            height={48}
                            className="dark:invert"
                            priority
                        />
                    </Link>

                    {/* Right - Icons */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleCart}
                            className="relative hover:opacity-70 transition-opacity"
                        >
                            <BagIcon className="w-10 h-10" />
                            {cart.length > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Logo */}
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

                    {/* Desktop Navigation */}
                    <nav className="flex items-center gap-8 text-sm font-medium tracking-wide">
                        <Link href="/products" className="hover:opacity-60 transition-opacity">
                            Shop
                        </Link>

                        {/* Collections with Dropdown - Second option */}
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
                                        className="absolute top-full left-0 mt-2 w-48 py-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
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

                        {/* Category Links - Individual text links */}
                        <Link href="/collections/mens" className="hover:opacity-60 transition-opacity">
                            Men
                        </Link>
                        <Link href="/collections/womens" className="hover:opacity-60 transition-opacity">
                            Women
                        </Link>
                        <Link href="/collections/kids-and-toddlers" className="hover:opacity-60 transition-opacity">
                            Kids & Toddlers
                        </Link>

                        <Link href="/about" className="hover:opacity-60 transition-opacity">
                            About
                        </Link>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleCart}
                            className="relative hover:opacity-70 transition-opacity"
                        >
                            <BagIcon className="w-10 h-10" />
                            {cart.length > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <Link href="/auth/signin" className="px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors text-base font-bold uppercase">
                            Login
                        </Link>
                    </div>
                </div>
            </motion.header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
