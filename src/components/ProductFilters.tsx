"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export interface FilterState {
    availability: string[];
    priceRange: [number, number];
    sortBy: string;
    categories: string[];
}

interface ProductFiltersProps {
    isOpen: boolean;
    onClose: () => void;
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
    productCount: number;
    availableCategories: string[];
}

const sortOptions = [
    { value: "best-selling", label: "Best selling" },
    { value: "featured", label: "Featured" },
    { value: "a-z", label: "Alphabetically, A-Z" },
    { value: "z-a", label: "Alphabetically, Z-A" },
    { value: "price-low-high", label: "Price, low to high" },
    { value: "price-high-low", label: "Price, high to low" },
    { value: "date-old-new", label: "Date, old to new" },
    { value: "date-new-old", label: "Date, new to old" },
];

export default function ProductFilters({
    isOpen,
    onClose,
    filters,
    onFiltersChange,
    productCount,
    availableCategories,
}: ProductFiltersProps) {
    const [expandedSections, setExpandedSections] = useState<string[]>(["sort"]);
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

    const toggleSection = (section: string) => {
        setExpandedSections((prev) =>
            prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
        );
    };

    const handleAvailabilityChange = (value: string) => {
        const newAvailability = filters.availability.includes(value)
            ? filters.availability.filter((a) => a !== value)
            : [...filters.availability, value];
        onFiltersChange({ ...filters, availability: newAvailability });
    };

    const handleCategoryChange = (category: string) => {
        const newCategories = filters.categories.includes(category)
            ? filters.categories.filter((c) => c !== category)
            : [...filters.categories, category];
        onFiltersChange({ ...filters, categories: newCategories });
    };

    const handlePriceChange = (index: 0 | 1, value: number) => {
        const newRange: [number, number] = [...filters.priceRange] as [number, number];
        newRange[index] = value;
        onFiltersChange({ ...filters, priceRange: newRange });
    };

    const handleSortChange = (value: string) => {
        onFiltersChange({ ...filters, sortBy: value });
        setIsSortDropdownOpen(false);
    };

    const handleRemoveAll = () => {
        onFiltersChange({
            availability: [],
            priceRange: [0, 100],
            sortBy: "best-selling",
            categories: [],
        });
    };

    const hasActiveFilters =
        filters.availability.length > 0 ||
        filters.categories.length > 0 ||
        filters.priceRange[0] > 0 ||
        filters.priceRange[1] < 100;

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
                        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Filter Modal - Different layouts for mobile/desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 z-[101] max-h-[85vh] rounded-t-3xl bg-neutral-950 border-t border-white/10 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-md md:w-full md:max-h-[80vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div>
                                <h2 className="text-lg font-semibold text-white">Filter and sort</h2>
                                <p className="text-sm text-white/50">{productCount} products</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Filter Content - Scrollable */}
                        <div className="overflow-y-auto max-h-[60vh] md:max-h-[50vh]">
                            {/* Availability Section */}
                            <div className="border-b border-white/10">
                                <button
                                    onClick={() => toggleSection("availability")}
                                    className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-medium">Availability</span>
                                    {expandedSections.includes("availability") ? (
                                        <ChevronDown className="w-5 h-5 text-white/50" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-white/50" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {expandedSections.includes("availability") && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 space-y-3">
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.availability.includes("in-stock")}
                                                        onChange={() => handleAvailabilityChange("in-stock")}
                                                        className="w-5 h-5 rounded border-2 border-white/30 bg-transparent checked:bg-white checked:border-white appearance-none cursor-pointer transition-colors"
                                                    />
                                                    <span className="text-white/80 group-hover:text-white transition-colors">
                                                        In stock
                                                    </span>
                                                </label>
                                                <label className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.availability.includes("out-of-stock")}
                                                        onChange={() => handleAvailabilityChange("out-of-stock")}
                                                        className="w-5 h-5 rounded border-2 border-white/30 bg-transparent checked:bg-white checked:border-white appearance-none cursor-pointer transition-colors"
                                                    />
                                                    <span className="text-white/80 group-hover:text-white transition-colors">
                                                        Out of stock
                                                    </span>
                                                </label>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Price Section */}
                            <div className="border-b border-white/10">
                                <button
                                    onClick={() => toggleSection("price")}
                                    className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-medium">Price</span>
                                    {expandedSections.includes("price") ? (
                                        <ChevronDown className="w-5 h-5 text-white/50" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-white/50" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {expandedSections.includes("price") && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 space-y-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex-1">
                                                        <label className="text-xs text-white/50 mb-1 block">Min</label>
                                                        <div className="relative">
                                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">$</span>
                                                            <input
                                                                type="number"
                                                                value={filters.priceRange[0]}
                                                                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                                                                className="w-full pl-7 pr-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/50 focus:outline-none transition-colors"
                                                                min={0}
                                                                max={filters.priceRange[1]}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span className="text-white/30 mt-5">—</span>
                                                    <div className="flex-1">
                                                        <label className="text-xs text-white/50 mb-1 block">Max</label>
                                                        <div className="relative">
                                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">$</span>
                                                            <input
                                                                type="number"
                                                                value={filters.priceRange[1]}
                                                                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                                                                className="w-full pl-7 pr-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:border-white/50 focus:outline-none transition-colors"
                                                                min={filters.priceRange[0]}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Price Range Slider */}
                                                <div className="pt-2">
                                                    <input
                                                        type="range"
                                                        min={0}
                                                        max={100}
                                                        value={filters.priceRange[1]}
                                                        onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                                                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Category Section */}
                            <div className="border-b border-white/10">
                                <button
                                    onClick={() => toggleSection("category")}
                                    className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-white font-medium">Category</span>
                                    {expandedSections.includes("category") ? (
                                        <ChevronDown className="w-5 h-5 text-white/50" />
                                    ) : (
                                        <ChevronRight className="w-5 h-5 text-white/50" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {expandedSections.includes("category") && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 space-y-3 max-h-48 overflow-y-auto">
                                                {availableCategories.map((category) => (
                                                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                                        <input
                                                            type="checkbox"
                                                            checked={filters.categories.includes(category)}
                                                            onChange={() => handleCategoryChange(category)}
                                                            className="w-5 h-5 rounded border-2 border-white/30 bg-transparent checked:bg-white checked:border-white appearance-none cursor-pointer transition-colors"
                                                        />
                                                        <span className="text-white/80 group-hover:text-white transition-colors">
                                                            {category}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Sort By Section */}
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-medium">Sort by:</span>
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors min-w-[180px] justify-between"
                                        >
                                            <span className="text-sm">
                                                {sortOptions.find((o) => o.value === filters.sortBy)?.label || "Best selling"}
                                            </span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${isSortDropdownOpen ? "rotate-180" : ""}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isSortDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-white/20 rounded-lg overflow-hidden z-10 shadow-xl"
                                                >
                                                    {sortOptions.map((option) => (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => handleSortChange(option.value)}
                                                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/10 transition-colors ${filters.sortBy === option.value
                                                                    ? "bg-white/10 text-white"
                                                                    : "text-white/80"
                                                                }`}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="flex items-center gap-4 p-6 border-t border-white/10">
                            <button
                                onClick={handleRemoveAll}
                                disabled={!hasActiveFilters}
                                className="flex-1 py-3 px-6 border border-white/20 rounded-full text-white/80 font-medium hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                Remove all
                            </button>
                            <button
                                onClick={onClose}
                                className="flex-1 py-3 px-6 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
                            >
                                Apply
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Filter Button Component for triggering the modal
export function FilterButton({ onClick, activeCount }: { onClick: () => void; activeCount: number }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
        >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-medium">Filter and sort</span>
            {activeCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 bg-white text-black text-xs font-bold rounded-full">
                    {activeCount}
                </span>
            )}
        </button>
    );
}
