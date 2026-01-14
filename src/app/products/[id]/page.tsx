"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useCallback } from "react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const product = products.find((p) => p.id === id);

    // Track selected color for image switching
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    const handleColorChange = useCallback((color: string) => {
        setSelectedColor(color);
    }, []);

    // Get all color images for preloading
    const colorImagesToPreload = useMemo(() => {
        if (!product?.colorImages) return [];
        return Object.values(product.colorImages);
    }, [product?.colorImages]);

    // Compute images array with color-specific image first if available
    const galleryImages = useMemo(() => {
        if (!product) return [];

        // If product has colorImages and a color is selected, put that image first
        if (product.colorImages && selectedColor && product.colorImages[selectedColor]) {
            const colorImage = product.colorImages[selectedColor];
            // Put color image first, then add rest of images (excluding duplicate if exists)
            const otherImages = product.images.filter(img => !img.includes(colorImage.split('?')[0].split('/').pop()?.split('.')[0] || ''));
            return [colorImage, ...otherImages];
        }

        return product.images;
    }, [product, selectedColor]);

    if (!product) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-white/60 hover:text-white underline">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            {/* Preload color images for instant switching */}
            <div className="hidden">
                {colorImagesToPreload.map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt=""
                        width={100}
                        height={100}
                        priority
                    />
                ))}
            </div>

            <main className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Back Button - uses browser history */}
                <div className="mb-8">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left: Gallery - no key prop to avoid full remount */}
                    <ProductGallery images={galleryImages} selectedColor={selectedColor} />

                    {/* Right: Info */}
                    <ProductInfo product={product} onColorChange={handleColorChange} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
