"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductPage() {
    const params = useParams();
    const id = params.id as string;
    const product = products.find((p) => p.id === id);

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

            <main className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Shop
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left: Gallery */}
                    <ProductGallery images={product.images} />

                    {/* Right: Info */}
                    <ProductInfo product={product} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
