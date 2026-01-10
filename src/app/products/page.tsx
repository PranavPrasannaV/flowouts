"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/FeaturedCollection";
import ProductFilters, { FilterButton, FilterState } from "@/components/ProductFilters";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductsPage() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        availability: [],
        priceRange: [0, 100],
        sortBy: "best-selling",
        categories: [],
    });

    // Get unique categories from products
    const availableCategories = useMemo(() => {
        const categories = new Set(products.map((p) => p.category));
        return Array.from(categories).sort();
    }, []);

    // Parse price from string like "$25.00" to number
    const parsePrice = (priceStr: string): number => {
        return parseFloat(priceStr.replace("$", ""));
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by category
        if (filters.categories.length > 0) {
            result = result.filter((p) => filters.categories.includes(p.category));
        }

        // Filter by price range
        result = result.filter((p) => {
            const price = parsePrice(p.price);
            return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });

        // Sort products
        switch (filters.sortBy) {
            case "a-z":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "price-low-high":
                result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                break;
            case "price-high-low":
                result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                break;
            case "featured":
            case "best-selling":
            default:
                // Keep original order for featured/best-selling
                break;
        }

        return result;
    }, [filters]);

    // Count active filters
    const activeFilterCount = useMemo(() => {
        let count = 0;
        if (filters.availability.length > 0) count++;
        if (filters.categories.length > 0) count++;
        if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100) count++;
        return count;
    }, [filters]);

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            {/* Page Content */}
            <main className="pt-24 pb-16">
                {/* Page Header */}
                <div className="px-6 md:px-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                    >
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-2">
                                All Products
                            </h1>
                            <p className="text-white/50">
                                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                            </p>
                        </div>

                        <FilterButton
                            onClick={() => setIsFilterOpen(true)}
                            activeCount={activeFilterCount}
                        />
                    </motion.div>
                </div>

                {/* Active Filters Display */}
                {(filters.categories.length > 0 || filters.availability.length > 0) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-6 md:px-12 mb-6"
                    >
                        <div className="flex flex-wrap gap-2">
                            {filters.categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilters((prev) => ({
                                        ...prev,
                                        categories: prev.categories.filter((c) => c !== category),
                                    }))}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                                >
                                    {category}
                                    <span className="text-white/50">×</span>
                                </button>
                            ))}
                            {filters.availability.map((avail) => (
                                <button
                                    key={avail}
                                    onClick={() => setFilters((prev) => ({
                                        ...prev,
                                        availability: prev.availability.filter((a) => a !== avail),
                                    }))}
                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                                >
                                    {avail === "in-stock" ? "In stock" : "Out of stock"}
                                    <span className="text-white/50">×</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Products Grid */}
                <div className="px-6 md:px-12">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-white/50 text-lg mb-4">No products match your filters</p>
                            <button
                                onClick={() => setFilters({
                                    availability: [],
                                    priceRange: [0, 100],
                                    sortBy: "best-selling",
                                    categories: [],
                                })}
                                className="px-6 py-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </main>

            <Footer />

            {/* Filter Modal */}
            <ProductFilters
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                filters={filters}
                onFiltersChange={setFilters}
                productCount={filteredProducts.length}
                availableCategories={availableCategories}
            />
        </div>
    );
}
