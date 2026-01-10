import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Header />
            <section className="flex-1 pt-32 pb-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold uppercase mb-8">Privacy Policy</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Your privacy is important to us. It is Flow's policy to respect your privacy regarding any information we may collect from you across our website.
                    <br /><br />
                    (Placeholder for full legal text)
                </p>
            </section>
            <Footer />
        </main>
    );
}
