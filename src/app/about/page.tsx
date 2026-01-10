import { aboutContent } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Header />
            <section className="flex-1 pt-32 pb-20 px-6 max-w-3xl mx-auto flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
                    {aboutContent.title}
                </h1>
                <div className="prose dark:prose-invert prose-lg text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                    {aboutContent.body}
                </div>
            </section>
            <Footer />
        </main>
    );
}
