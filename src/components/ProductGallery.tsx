"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
    selectedColor?: string | null;
}

// Shimmer loading skeleton component
function ImageSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent"
                animate={{
                    x: ["-100%", "100%"],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

export default function ProductGallery({ images, selectedColor }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [thumbnailStart, setThumbnailStart] = useState(0);
    const [slideDirection, setSlideDirection] = useState(0); // -1 for left, 1 for right
    const isColorChangeRef = useRef(false);
    const prevColorRef = useRef(selectedColor);

    // Loading states
    const [mainImageLoaded, setMainImageLoaded] = useState(false);
    const [loadedThumbnails, setLoadedThumbnails] = useState<Set<number>>(new Set());

    const visibleThumbnails = 4;
    const canScrollLeft = thumbnailStart > 0;
    const canScrollRight = thumbnailStart + visibleThumbnails < images.length;

    // Reset main image loading state when selected image changes
    useEffect(() => {
        setMainImageLoaded(false);
    }, [selectedImage, selectedColor]);

    // When color changes, reset to first image without triggering thumbnail animation
    useEffect(() => {
        if (selectedColor !== prevColorRef.current) {
            prevColorRef.current = selectedColor;
            isColorChangeRef.current = true;
            setSelectedImage(0);
            setLoadedThumbnails(new Set()); // Reset thumbnail loading states
            // Don't change thumbnailStart or slideDirection - keep thumbnails where they are
        }
    }, [selectedColor]);

    const scrollThumbnails = (direction: 'left' | 'right') => {
        if (direction === 'left' && canScrollLeft) {
            setSlideDirection(-1);
            setThumbnailStart(prev => Math.max(0, prev - visibleThumbnails));
        } else if (direction === 'right' && canScrollRight) {
            setSlideDirection(1);
            setThumbnailStart(prev => Math.min(images.length - visibleThumbnails, prev + visibleThumbnails));
        }
    };

    // Navigate to a specific image and sync thumbnail view
    const navigateToImage = (newIndex: number) => {
        const wrappedIndex = newIndex < 0 ? images.length - 1 : newIndex >= images.length ? 0 : newIndex;
        setSelectedImage(wrappedIndex);

        // Calculate which page this image should be on
        const targetPage = Math.floor(wrappedIndex / visibleThumbnails);
        const newStart = Math.min(targetPage * visibleThumbnails, Math.max(0, images.length - visibleThumbnails));

        // Only update thumbnail view if the image is not currently visible
        if (wrappedIndex < thumbnailStart || wrappedIndex >= thumbnailStart + visibleThumbnails) {
            setSlideDirection(wrappedIndex > selectedImage ? 1 : -1);
            setThumbnailStart(newStart);
        }
    };

    const handleThumbnailLoad = (index: number) => {
        setLoadedThumbnails(prev => new Set(prev).add(index));
    };

    const visibleImages = images.slice(thumbnailStart, thumbnailStart + visibleThumbnails);

    const thumbnailVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0
        })
    };

    return (
        <div className="flex flex-col gap-4 md:sticky md:top-24">
            {/* Thumbnails at top - 4 at a time with navigation */}
            <div className="relative hidden md:block">
                <div className="flex items-center gap-2">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scrollThumbnails('left')}
                        disabled={!canScrollLeft}
                        className={cn(
                            "p-1 rounded-full transition-all shrink-0",
                            canScrollLeft
                                ? "hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white"
                                : "text-black/20 dark:text-white/20 cursor-not-allowed"
                        )}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Thumbnail Grid with Animation */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait" custom={slideDirection}>
                            <motion.div
                                key={thumbnailStart}
                                custom={slideDirection}
                                variants={thumbnailVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex gap-2"
                            >
                                {visibleImages.map((image, index) => {
                                    const actualIndex = thumbnailStart + index;
                                    const isLoaded = loadedThumbnails.has(actualIndex);
                                    return (
                                        <button
                                            key={actualIndex}
                                            onClick={() => setSelectedImage(actualIndex)}
                                            className={cn(
                                                "relative aspect-square flex-1 rounded-lg overflow-hidden border-2 transition-all",
                                                selectedImage === actualIndex
                                                    ? "border-black dark:border-white"
                                                    : "border-transparent opacity-70 hover:opacity-100"
                                            )}
                                        >
                                            {!isLoaded && <ImageSkeleton />}
                                            <Image
                                                src={image}
                                                alt={`Product view ${actualIndex + 1}`}
                                                fill
                                                unoptimized
                                                className={cn(
                                                    "object-cover transition-opacity duration-300",
                                                    isLoaded ? "opacity-100" : "opacity-0"
                                                )}
                                                onLoad={() => handleThumbnailLoad(actualIndex)}
                                            />
                                        </button>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scrollThumbnails('right')}
                        disabled={!canScrollRight}
                        className={cn(
                            "p-1 rounded-full transition-all shrink-0",
                            canScrollRight
                                ? "hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white"
                                : "text-black/20 dark:text-white/20 cursor-not-allowed"
                        )}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Page indicator - clickable dots */}
                {images.length > visibleThumbnails && (
                    <div className="flex justify-center gap-1.5 mt-2">
                        {Array.from({ length: Math.ceil(images.length / visibleThumbnails) }).map((_, pageIndex) => {
                            const isLastPage = pageIndex === Math.ceil(images.length / visibleThumbnails) - 1;
                            const pageStart = isLastPage
                                ? Math.max(0, images.length - visibleThumbnails)
                                : pageIndex * visibleThumbnails;
                            const isActive = thumbnailStart === pageStart;

                            return (
                                <button
                                    key={pageIndex}
                                    onClick={() => {
                                        if (isActive) return; // Already on this page
                                        setSlideDirection(pageStart > thumbnailStart ? 1 : -1);
                                        setThumbnailStart(pageStart);
                                    }}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all hover:scale-125",
                                        isActive
                                            ? "bg-black dark:bg-white"
                                            : "bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                                    )}
                                />
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Main Image - Fixed dimensions with loading skeleton */}
            <div className="relative w-full h-[400px] md:h-[600px]">
                {/* Loading skeleton for main image */}
                <AnimatePresence>
                    {!mainImageLoaded && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 rounded-2xl overflow-hidden z-10"
                        >
                            <ImageSkeleton className="rounded-2xl" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    key={`${selectedImage}-${selectedColor}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mainImageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src={images[selectedImage]}
                        alt="Product main view"
                        fill
                        unoptimized
                        className="object-contain rounded-2xl"
                        priority
                        onLoad={() => setMainImageLoaded(true)}
                    />
                </motion.div>

                {/* Navigation arrows on main image */}
                <button
                    onClick={() => navigateToImage(selectedImage - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-all shadow-lg z-20"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => navigateToImage(selectedImage + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black transition-all shadow-lg z-20"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 dark:bg-white/60 text-white dark:text-black text-sm font-medium z-20">
                    {selectedImage + 1} / {images.length}
                </div>
            </div>

            {/* Mobile Thumbnails Scroll */}
            <div className="flex md:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
                {images.map((image, index) => {
                    const isLoaded = loadedThumbnails.has(index);
                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={cn(
                                "relative aspect-square w-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all snap-start",
                                selectedImage === index
                                    ? "border-black dark:border-white"
                                    : "border-transparent opacity-70"
                            )}
                        >
                            {!isLoaded && <ImageSkeleton />}
                            <Image
                                src={image}
                                alt={`Product view ${index + 1}`}
                                fill
                                unoptimized
                                className={cn(
                                    "object-cover transition-opacity duration-300",
                                    isLoaded ? "opacity-100" : "opacity-0"
                                )}
                                onLoad={() => handleThumbnailLoad(index)}
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
