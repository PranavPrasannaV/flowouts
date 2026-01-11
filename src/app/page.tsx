"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EssentialsCollection from "@/components/EssentialsCollection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  // Unlock scroll after animation finishes (4 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrollLocked(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isScrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isScrollLocked]);

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Header animationDelay={2} />
      <Hero />
      <EssentialsCollection />
      <Footer />
    </main>
  );
}
