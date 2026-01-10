import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import EssentialsCollection from "@/components/EssentialsCollection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Header />
      <Hero />
      <EssentialsCollection />
      <FeaturedCollection />
      <Footer />
    </main>
  );
}
