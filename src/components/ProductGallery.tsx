"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-24">
            {/* Thumbnails (Desktop: Left Vertical, Mobile: Hidden/Bottom) */}
            <div className="hidden md:flex flex-col gap-4 w-20 shrink-0">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative aspect-square w-full rounded-lg overflow-hidden border transition-all",
                            selectedImage === index
                                ? "border-black dark:border-white opacity-100"
                                : "border-transparent opacity-60 hover:opacity-100"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`Product view ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-[3/4] md:aspect-square w-full bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden">
                <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={images[selectedImage]}
                        alt="Product main view"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Mobile Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                selectedImage === index
                                    ? "bg-black dark:bg-white w-4"
                                    : "bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Thumbnails Scroll (optional, good for many images) */}
            <div className="flex md:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={cn(
                            "relative aspect-square w-20 shrink-0 rounded-lg overflow-hidden border transition-all snap-start",
                            selectedImage === index
                                ? "border-black dark:border-white"
                                : "border-transparent"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`Product view ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
